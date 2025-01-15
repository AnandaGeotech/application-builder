/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
  mode?: 'onSubmit' | 'onBlur' | 'onChange' | 'all';
};

type TFormProps = {
  children: ReactNode;
} & TFormConfig;

const ABPHForm = ({ children, defaultValues, resolver, mode = 'all' }: TFormProps) => {
  const formConfig: TFormConfig = { mode };

  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  if (resolver) {
    formConfig.resolver = resolver;
  }

  const methods = useForm(formConfig);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ABPHForm;
