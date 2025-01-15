import { Controller } from 'react-hook-form';
import ABLabel from './ABLabel';

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  required?: boolean; // Add required prop to determine if the field is required
  disabled?: boolean;
  rules?: Record<string, unknown>; // Add rules prop to handle validation rules
};

const ABInput = ({ type = 'text', name, label, required, disabled, rules = {} }: TInputProps) => (
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
          disabled={disabled}
          className={`block w-full rounded-md bg-white px-3.5 py-2 text-base 
            ${fieldState.error?.message ? 'text-red-500 border-red-500' : 'text-gray-900 border-gray-300'} 
            outline outline-1 placeholder:text-gray-400 
            focus:outline focus:outline-2 focus:outline-indigo-600`}
        />

        <div className="mt-1 min-h-[1.25rem]">
          {fieldState.error?.message && <p className="text-sm text-red-500">{fieldState.error.message}</p>}
        </div>
      </>
    )}
  />
);

export default ABInput;
