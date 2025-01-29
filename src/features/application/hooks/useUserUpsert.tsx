/* eslint-disable boundaries/no-unknown */
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useFieldArray, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import applicationService from '../services/application.service';
import { delay } from '@/lib/utils';
import { IApplicationUser } from '@/types/application.type';

const { USER_SERVICE } = applicationService();

const useUserUpsert = () => {
  const methods = useFormContext();

  const [uiLoading, setUiLoading] = useState(true);

  const { id: userId } = useParams();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const getSingleUser = async () => {
    const toastId = toast.loading('Fetching data...');
    await delay(2000);
    try {
      const resDta = await USER_SERVICE.getSingleFileDataFn(userId as string);
      if (search.includes('notFound')) {
        navigate(`/edit/${userId}`, { replace: true });
      }

      methods.reset(resDta);
      toast.dismiss(toastId);
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId });
      navigate(`/edit/${userId}?notFound=true`, { replace: true });
    } finally {
      setUiLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getSingleUser();
    } else {
      setUiLoading(false);
    }
  }, [userId]);

  const submit: SubmitHandler<FieldValues> = (() => {
    let toastId: string | undefined;

    return async (data) => {
      if (toastId) return;

      toastId = toast.loading('Uploading data...');
      await delay(2000);
      const formData = new FormData();
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0]);
      }
      try {
        const newData = await USER_SERVICE.upsertDataToDBFn(data as IApplicationUser);
        toast.success(`User ${userId ? 'updated' : 'added'} successfully`, { id: toastId });
        toastId = undefined;
        methods.reset({});
        if (newData?.id && pathname.includes('add')) {
          navigate(`/edit/${newData.id}`);
        }
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
    search,
    uiLoading,
  };
};

export default useUserUpsert;
