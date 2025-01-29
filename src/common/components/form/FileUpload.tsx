/* eslint-disable boundaries/no-unknown */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Controller } from 'react-hook-form';
import { TbPhotoCircle } from 'react-icons/tb';
import { FileInputProps } from '@/types/common.type';

const FileInput: React.FC<FileInputProps> = ({ handleFileChange, preview }) => (
  <div className="col-span-full border-b border-gray-900/10">
    {preview && (
      <label htmlFor="file-upload" className="block text-sm font-medium text-gray-900">
        Cover Photo
      </label>
    )}
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        {preview ? (
          <img src={preview} alt="Preview" className="mx-auto h-32 w-32 rounded-lg object-top" />
        ) : (
          <TbPhotoCircle aria-hidden="true" className="mx-auto text-gray-300" size={48} />
        )}
        <div className="mt-4 flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold
             text-indigo-600 focus-within:outline-none focus-within:ring-2
              focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <Controller
              name="file"
              render={() => (
                <input
                  id="file-upload"
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  className="sr-only"
                  onChange={(e) => handleFileChange(e.target.files)}
                />
              )}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  </div>
);

export default FileInput;
