/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { RiCloseCircleLine } from 'react-icons/ri';
import { ADD_FORMBUILDER_FORM_FIELDS } from '../contstant/addbuilder-form.constant';

import ABInput from '@/common/components/form/ABInput';
import ABSelect from '@/common/components/form/ABSelect';
import useUserUpsert from '@/features/application/hooks/useUserUpsert';

const AddForm = () => {
  const {
    methods,
    submit,
    educationFields,
    addEducation,
    removeEducation,
    professionalFields,
    addProfessional,
    removeProfessional,
  } = useUserUpsert();

  console.log(educationFields, 'educationFields');
  return (
    <form onSubmit={methods.handleSubmit(submit)} className="mx-auto mt-16 max-w-xl sm:mt-20 relative z-20">
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
        <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.HOMETOWN} />
          </div>

          <div className="sm:col-span-3">
            {' '}
            <ABSelect {...ADD_FORMBUILDER_FORM_FIELDS.LANGUAGE} />
          </div>
        </div>
        <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.BIRTH_DATE} />
          </div>

          <div className="sm:col-span-3">
            {' '}
            <ABSelect {...ADD_FORMBUILDER_FORM_FIELDS.COUNTRY} />
          </div>
        </div>
        <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.COMPANY} />
          </div>

          <div className="sm:col-span-3">
            {' '}
            <ABSelect {...ADD_FORMBUILDER_FORM_FIELDS.MARITUAL_STATUS} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.PRESENT_ADDRESS} />
        </div>
        <div className="sm:col-span-2">
          <ABInput {...ADD_FORMBUILDER_FORM_FIELDS.PARMANENT_ADDRESS} />
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
        <div className="flex col-span-full justify-end pt-3">
          <button
            type="button"
            onClick={() => addEducation({ label: '', duration: '', description: '' })}
            className="p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600  "
          >
            Add Education
          </button>
        </div>
        {educationFields.map((field, index) => (
          <div key={field.id} className="col-span-full border-b border-gray-900/10 flex gap-2 ">
            <div
              key={field.id}
              className="col-span-full border-b border-gray-900/10 grid grid-cols-1 gap-x-6  sm:grid-cols-6"
            >
              <div className="sm:col-span-2">
                <ABInput
                  {...ADD_FORMBUILDER_FORM_FIELDS.EDUCATION.LABEL}
                  name={`education.${[index]}.${ADD_FORMBUILDER_FORM_FIELDS.EDUCATION.LABEL.name}`}
                />
              </div>
              <div className="sm:col-span-2">
                <ABInput
                  {...ADD_FORMBUILDER_FORM_FIELDS.EDUCATION.DURATION}
                  name={`education.${[index]}.${ADD_FORMBUILDER_FORM_FIELDS.EDUCATION.DURATION.name}`}
                />
              </div>
              <div className="sm:col-span-2">
                <ABInput
                  {...ADD_FORMBUILDER_FORM_FIELDS.EDUCATION.DESCRIPTION}
                  name={`education.${[index]}.${ADD_FORMBUILDER_FORM_FIELDS.EDUCATION.DESCRIPTION.name}`}
                />
              </div>
            </div>

            <button type="button" onClick={() => removeEducation(index)} className="text-red-500 hover:underline">
              <RiCloseCircleLine size={25} />
            </button>
          </div>
        ))}
        <div className="flex col-span-full justify-end pt-3">
          <button
            type="button"
            onClick={() => addProfessional({ label: '', duration: '', description: '' })}
            className="p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600  "
          >
            Add Professional
          </button>
        </div>
        {professionalFields.map((field, index) => (
          <div key={field.id} className="col-span-full border-b border-gray-900/10 flex gap-2 ">
            <div
              key={field.id}
              className="col-span-full border-b border-gray-900/10 grid grid-cols-1 gap-x-6  sm:grid-cols-6"
            >
              <div className="sm:col-span-2">
                <ABInput
                  {...ADD_FORMBUILDER_FORM_FIELDS.PROFESSION.LABEL}
                  name={`professional.${[index]}.${ADD_FORMBUILDER_FORM_FIELDS.PROFESSION.LABEL.name}`}
                />
              </div>
              <div className="sm:col-span-2">
                <ABInput
                  {...ADD_FORMBUILDER_FORM_FIELDS.PROFESSION.DURATION}
                  name={`professional.${[index]}.${ADD_FORMBUILDER_FORM_FIELDS.PROFESSION.DURATION.name}`}
                />
              </div>
              <div className="sm:col-span-2">
                <ABInput
                  {...ADD_FORMBUILDER_FORM_FIELDS.PROFESSION.DESCRIPTION}
                  name={`professional.${[index]}.${ADD_FORMBUILDER_FORM_FIELDS.PROFESSION.DESCRIPTION.name}`}
                />
              </div>
            </div>

            <button type="button" onClick={() => removeProfessional(index)} className="text-red-500 hover:underline">
              <RiCloseCircleLine size={25} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddForm;
