/* eslint-disable max-len */
import React from 'react';
import { Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import ABLabel from './ABLabel';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: Record<string, unknown>;
  required?: boolean;
  disabled?: boolean;
}

interface SelectProps extends InputProps {
  options: { value: string; label: string }[];
}

const ABSelect: React.FC<SelectProps> = ({ name, label, options, rules, required = false, disabled = false }) => {
  const { search } = useLocation();

  return (
    <div>
      <Controller
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            {label && <ABLabel error={fieldState.error?.message} required={required} htmlFor={name} label={label} />}
            <select
              {...field}
              disabled={search.includes('notFound') || disabled}
              id={name}
              className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2  ${fieldState.error?.message ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldState.error?.message && <p className=" text-sm text-red-500">{fieldState.error?.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default ABSelect;
