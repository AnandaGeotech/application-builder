/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { ADD_FORMBUILDER_FORM_FIELDS } from '../contstant/addbuilder-form.constant';
import ABInput from '@/common/components/form/ABInput';
import ABSelect from '@/common/components/form/ABSelect';
import ABFileInput from '@/common/components/form/ABFileUpload';

const EditForm = ({ initialData }) => {
  const methods = useFormContext();

  const submit: SubmitHandler<FieldValues> = (() => {
    let toastId: string | undefined;

    return async (data) => {
      if (toastId) return;

      toastId = toast.loading('Updating user...');

      const formData = new FormData();
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0]);
      }

      // Simulate an API call
      setTimeout(() => {
        toast.success('User updated successfully', { id: toastId });
        toastId = undefined;
      }, 2000);
    };
  })();

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    // Set initial preview if a file URL exists
    if (initialData.fileUrl) {
      setPreview(initialData.fileUrl);
    }

    // Populate form fields with initial data
    Object.keys(initialData).forEach((key) => {
      methods.setValue(key, initialData[key]);
    });
  }, [initialData, methods]);

  const handleFileChange = (fileList: FileList | null) => {
    if (fileList && fileList[0]) {
      const file = fileList[0];
      methods.setValue('file', fileList);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <form onSubmit={methods.handleSubmit(submit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
        <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <div className="col-span-3">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.FIRST_NAME} />
          </div>
          <div className="col-span-3">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.LAST_NAME} />
          </div>
        </div>

        <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.PHONE} />
          </div>

          <div className="sm:col-span-3">
            {' '}
            <ABSelect {...ADD_FORMBUILDER_FORM_FIELDS.GENDER} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.ADDRESS} />
        </div>

        <div className="col-span-full border-b border-gray-900/10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <div className="sm:col-span-2 sm:col-start-1">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.CITY} />
          </div>

          <div className="sm:col-span-2">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.STATE} />
          </div>

          <div className="sm:col-span-2">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.PINCODE} />
          </div>
        </div>
        <div className="col-span-full ">
          <ABFileInput handleFileChange={handleFileChange} preview={preview} />
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditForm;
