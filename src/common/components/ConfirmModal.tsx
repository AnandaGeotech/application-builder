/* eslint-disable boundaries/no-unknown */
import React from 'react';
import { Button } from './Button';
import { GlobalModalProps } from '@/types/modal.type';

const ConfirmModal: React.FC<GlobalModalProps> = ({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* Icon */}
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <svg
                    className="size-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={`M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 
                        3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z`}
                    />
                  </svg>
                </div>
                {/* Content */}
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                  {children && <div className="mt-4">{children}</div>}
                </div>
              </div>
            </div>
            {/* Footer Actions */}
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {onConfirm && (
                <Button
                  type="button"
                  onClick={onConfirm}
                  className="flex items-center justify-center px-3 h-8 leading-tight dark:text-white text-gray-500 border border-gray-300 rounded-s-lg  'hover:text-gray-700 "
                >
                  {confirmLabel}
                </Button>
              )}
              <Button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center px-3 h-8 leading-tight dark:text-white text-gray-500 border border-gray-300 rounded-s-lg  'hover:text-gray-700 "
              >
                {cancelLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
