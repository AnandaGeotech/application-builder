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
import useFetchData from '@/common/hooks/useFetchData';
import { IRegisterUser } from '@/common/types/application.type';

const { userLoginFromDBFn } = authenticationService();

const useUserLogin = () => {
  const methods = useFormContext();
  const { setUser, setToken } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const fetchOptions = useFetchData<
    | {
        user: IRegisterUser;
        token: string;
      }
    | undefined
  >();

  const { loadData: fetchData } = fetchOptions;
  const navigate = useNavigate();

  const submit: SubmitHandler<FieldValues> = (() => {
    let toastId: string | undefined;

    return async (data) => {
      if (toastId) return;

      toastId = toast.loading('User logging...');

      try {
        await delay(9000);
        const newData = await fetchData(() => userLoginFromDBFn(data.email, data.password));
        if (newData?.user?.id) {
          toast.success('User login successfully', { id: toastId });
          setUser(newData?.user);
          localStorage.setItem(APPLICATION_TOKEN, newData.token);
          setToken(newData.token);
          methods.reset({});
          navigate('/');
        } else {
          toast.error('Invalid credentials', { id: toastId });
        }
        toastId = undefined;
      } catch (error: any) {
        toast.error(error.message || 'Something went wrong!', { id: toastId });
        toastId = undefined;
      }
    };
  })();

  return {
    methods,
    submit,
    showPassword,
    setShowPassword,
    ...fetchOptions,
  };
};

export default useUserLogin;
