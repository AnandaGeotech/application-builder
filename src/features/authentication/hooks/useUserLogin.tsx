/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { delay } from '@/common/components/utils';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import authenticationService from '../service/authentication.service';
import { APPLICATION_TOKEN } from '@/common/constants/common.constant';
import { useAuth } from '@/common/contexts/auth.context';

const { userLoginFromDBFn } = authenticationService();

const useUserLogin = () => {
  const methods = useFormContext();
  const { setUser, setToken } = useAuth();

  const [uiLoading, setUiLoading] = useState(false);

  const navigate = useNavigate();

  const submit: SubmitHandler<FieldValues> = (() => {
    let toastId: string | undefined;

    return async (data) => {
      if (toastId) return;

      toastId = toast.loading('Uploading data...');
      await delay(1000);

      try {
        const newData = await userLoginFromDBFn(data.email, data.password);
        toast.success('User login successfully', { id: toastId });
        toastId = undefined;

        methods.reset({});
        if (newData?.[0]?.id) {
          setUser(newData?.[0]);
          localStorage.setItem(APPLICATION_TOKEN, 'tokennn');
          setToken('tokennn');
          await delay(2000);

          navigate('/');
        }
      } catch (error) {
        toast.error('Something went wrong!', { id: toastId });
        toastId = undefined;
      }
    };
  })();

  return {
    methods,
    submit,
    uiLoading,
  };
};

export default useUserLogin;
