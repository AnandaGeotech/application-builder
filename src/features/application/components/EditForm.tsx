/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { RiCloseCircleLine } from 'react-icons/ri';
import { ADD_FORMBUILDER_FORM_FIELDS } from '../constants/addbuilder-form.constant';

import ABInput from '@/common/components/form/ABInput';
import ABSelect from '@/common/components/form/ABSelect';
import useUserUpsert from '@/features/application/hooks/useUserUpsert';
import { Button } from '@/common/components/Button';
import SkeletonFormLoader from '@/common/components/form/FormLoader';

const EditForm = () => {
  const {
    methods,
    submit,
    educationFields,
    addEducation,
    removeEducation,
    professionalFields,
    addProfessional,
    removeProfessional,
    search,
    uiLoading,
  } = useUserUpsert();

  return (
    <>
      {' '}
      {uiLoading ? (
        <SkeletonFormLoader />
      ) : (
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
              <Button
                type="button"
                disabled={search.includes('notFound')}
                onClick={() => addEducation({ label: '', duration: '', description: '' })}
                className="flex items-center justify-center px-3 h-8 leading-tight dark:text-white text-gray-500 border border-gray-300 rounded-s-lg  'hover:text-gray-700 "
              >
                Add Education
              </Button>
            </div>
            {educationFields.map((field, index) => (
              <div key={field.id} className="col-span-full items-center border-b border-gray-900/10 flex gap-2 ">
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

                <Button
                  type="button"
                  disabled={educationFields.length < 2}
                  onClick={() => educationFields.length > 1 && removeEducation(index)}
                  variant="danger"
                >
                  <RiCloseCircleLine size={25} />
                </Button>
              </div>
            ))}
            <div className="flex col-span-full justify-end pt-3">
              <Button
                type="button"
                disabled={search.includes('notFound')}
                onClick={() => addProfessional({ label: '', duration: '', description: '' })}
                className="flex items-center justify-center px-3 h-8 leading-tight dark:text-white text-gray-500 border border-gray-300 rounded-s-lg  'hover:text-gray-700  "
              >
                Add Professional
              </Button>
            </div>
            {professionalFields.map((field, index) => (
              <div key={field.id} className="col-span-full items-center border-b border-gray-900/10 flex gap-2 ">
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

                <Button
                  type="button"
                  disabled={professionalFields.length < 2}
                  onClick={() => professionalFields.length > 1 && removeProfessional(index)}
                  className="text-red-500 hover:underline"
                >
                  <RiCloseCircleLine size={25} />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="flex items-center justify-center px-3 h-8 leading-tight dark:text-white text-gray-500 border border-gray-300 rounded-s-lg  'hover:text-gray-700 w-full"
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditForm;
