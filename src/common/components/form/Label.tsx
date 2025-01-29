import React from 'react';
import { LabelProps } from '@/common/types/common.type';

const Label: React.FC<LabelProps> = ({ htmlFor, label, required, error, className }) => {
  // Base styles
  const baseLabelClass = 'block mb-2 text-sm font-medium ';
  const errorLabelClass = 'text-red-700 dark:text-red-500';
  const successLabelClass = 'text-gray-900 dark:text-white';

  const computedClassName = `${baseLabelClass} ${error ? errorLabelClass : successLabelClass} ${className || ''}`;

  return (
    <label htmlFor={htmlFor} className={computedClassName}>
      {label} {required && <span className="text-red-700">*</span>}
    </label>
  );
};

export default Label;
