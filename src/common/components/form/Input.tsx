import { Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import ABLabel from './Label';

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  required?: boolean; // Add required prop to determine if the field is required
  disabled?: boolean;
  rules?: Record<string, unknown>; // Add rules prop to handle validation rules
};

const Input = ({ type = 'text', name, label, required, disabled, rules = {} }: TInputProps) => {
  const { search } = useLocation();
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          {label && <ABLabel error={fieldState.error?.message} required={required} htmlFor={name} label={label} />}

          <input
            {...field}
            type={type}
            id={name}
            disabled={search.includes('notFound') || disabled}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500   
              ${fieldState.error?.message ? 'text-red-500 border-red-500' : 'dark:text-white dark:border-gray-600'}`}
          />

          <div className="mt-1 min-h-[1.25rem]">
            {fieldState.error?.message && <p className="text-sm text-red-500">{fieldState.error.message}</p>}
          </div>
        </>
      )}
    />
  );
};

export default Input;
