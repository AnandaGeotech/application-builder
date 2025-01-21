/* eslint-disable boundaries/no-unknown */
import React from 'react';
import { LabelProps } from '@/types/common.type';

// Define the props for the Label component

const ABLabel: React.FC<LabelProps> = ({ htmlFor, label, required, error, className }) => {
  // Base styles
  const baseLabelClass = 'block items-center gap-1 text-sm font-medium pb-2';
  const errorLabelClass = 'text-red-700 dark:text-red-500';
  const successLabelClass = 'text-gray-900';

  const computedClassName = `${baseLabelClass} ${error ? errorLabelClass : successLabelClass} ${className || ''}`;

  return (
    <label htmlFor={htmlFor} className={computedClassName}>
      {label} {required && <span className="text-red-700">*</span>}
    </label>
  );
};

export default ABLabel;
