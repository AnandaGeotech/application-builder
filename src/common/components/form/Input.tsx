import { Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import Label from '@/common/components/form/Label';

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  rules?: Record<string, unknown>;
} & Record<string, unknown>;

const Input = ({ type = 'text', name, label, required, disabled, rules = {}, ...restOptions }: TInputProps) => {
  const { search } = useLocation();
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          {label && <Label error={fieldState.error?.message} required={required} htmlFor={name} label={label} />}

          <input
            {...restOptions}
            {...field}
            type={type}
            id={name}
            disabled={search.includes('notFound') || disabled}
            className={`custom-input   
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
