import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useFieldArray, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import applicationService from '../services/application.service';

const serviceMethods = applicationService();

const useUserUpsert = () => {
  const methods = useFormContext();

  const { id: userId } = useParams();

  const getSingleUser = async () => {
    const toastId = toast.loading('Uploading data...');
    try {
      const resDta = await serviceMethods.getSingleFileDataFn(userId as string);

      methods.reset(resDta);
      toast.dismiss(toastId);
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId });
    }
  };

  useEffect(() => {
    if (userId) {
      getSingleUser();
    }
  }, [userId]);

  const submit: SubmitHandler<FieldValues> = (() => {
    let toastId: string | undefined;

    return async (data) => {
      if (toastId) return;

      toastId = toast.loading('Uploading data...');

      const formData = new FormData();
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0]);
      }
      try {
        await serviceMethods.upsertDataToDBFn(data);
        toast.success(`User ${userId ? 'updated' : 'added'} successfully`, { id: toastId });
        toastId = undefined;
      } catch (error) {
        toast.error('Something went wrong!', { id: toastId });
        toastId = undefined;
      }
    };
  })();
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (fileList: FileList | null) => {
    if (fileList && fileList[0]) {
      const file = fileList[0];
      methods.setValue('file', fileList);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({
    control: methods.control,
    name: 'education',
  });

  const {
    fields: professionalFields,
    append: addProfessional,
    remove: removeProfessional,
  } = useFieldArray({
    control: methods.control,
    name: 'professional',
  });
  return {
    methods,
    submit,
    handleFileChange,
    preview,
    educationFields,
    addEducation,
    removeEducation,
    professionalFields,
    addProfessional,
    removeProfessional,
  };
};

export default useUserUpsert;
