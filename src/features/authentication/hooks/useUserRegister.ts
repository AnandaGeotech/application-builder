/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { delay } from '@/common/components/utils';
import GlobalDBService from '@/common/services/global.service';
import { IRegisterUser } from '@/common/types/application.type';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const { AUTHENTICATION_SERVICE } = GlobalDBService();

const useUserRegister = () => {
  const methods = useFormContext();

  const [uiLoading, setUiLoading] = useState(false);

  const navigate = useNavigate();

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
        const newData = await AUTHENTICATION_SERVICE.userRegisterToDBFn(data as IRegisterUser);
        toast.success('User added successfully', { id: toastId });
        toastId = undefined;
        methods.reset({});
        if (newData?.id) {
          navigate('/auth/login');
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

  // const {
  //   fields: educationFields,
  //   append: addEducation,
  //   remove: removeEducation,
  // } = useFieldArray({
  //   control: methods.control,
  //   name: 'education',
  // });

  // const {
  //   fields: professionalFields,
  //   append: addProfessional,
  //   remove: removeProfessional,
  // } = useFieldArray({
  //   control: methods.control,
  //   name: 'professional',
  // });
  return {
    methods,
    submit,
    handleFileChange,
    preview,
    uiLoading,
  };
};

export default useUserRegister;
