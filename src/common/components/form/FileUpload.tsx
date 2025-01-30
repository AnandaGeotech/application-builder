import React from 'react';
import { Controller } from 'react-hook-form';
import { TbPhotoCircle } from 'react-icons/tb';
import Label from '@/common/components/form/Label';

import { FileInputProps } from '@/common/types/common.type';

const FileInput: React.FC<FileInputProps> = ({ handleFileChange, preview }) => (
  <div className="col-span-full border-b border-gray-900/10">
    {preview && (
      <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-900" label=" Cover Photo" />
    )}
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        {preview ? (
          <img src={preview} alt="Preview" className="mx-auto h-32 w-32 rounded-lg object-top" />
        ) : (
          <TbPhotoCircle aria-hidden="true" className="mx-auto text-gray-300" size={48} />
        )}
        <div className="mt-4 flex text-sm text-gray-600">
          <Label htmlFor="fileupload" className="custom-input" label="Upload a file" />

          <Controller
            name="file"
            render={() => (
              <input
                id="fileupload"
                type="file"
                accept="image/png, image/jpeg, image/gif"
                className="sr-only"
                onChange={(e) => handleFileChange(e.target.files)}
              />
            )}
          />
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  </div>
);

export default FileInput;
