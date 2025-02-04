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
  const [showPassword, setShowPassword] = useState(false);
  const [uiLoading, setUiLoading] = useState(false);

  const navigate = useNavigate();

  const submit: SubmitHandler<FieldValues> = (() => {
    let toastId: string | undefined;

    return async (data) => {
      if (toastId) return;

      toastId = toast.loading('User logging...');
      await delay(1000);

      try {
        const newData = await userLoginFromDBFn(data.email, data.password);

        if (newData?.user?.id) {
          toast.success('User login successfully', { id: toastId });
          setUser(newData?.user);
          localStorage.setItem(APPLICATION_TOKEN, newData.token);
          setToken(newData.token);
          await delay(2000);
          methods.reset({});
          navigate('/');
        } else {
          toast.error('Invalid credentials', { id: toastId });
        }
        toastId = undefined;
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
    showPassword,
    setShowPassword,
  };
};

export default useUserLogin;
