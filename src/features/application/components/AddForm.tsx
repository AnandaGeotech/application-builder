import { RiCloseCircleLine } from 'react-icons/ri';
import { ADD_FORM_BUILDER_FORM_FIELDS } from '../constants/addbuilder-form.constant';

import Input from '@/common/components/form/Input';
import Select from '@/common/components/form/Select';
import useUserUpsert from '@/features/application/hooks/useUserUpsert';
import { Button } from '@/common/components/Button';
import SkeletonFormLoader from '@/common/components/form/FormLoader';

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
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.FIRST_NAME} />
              </div>
              <div className="col-span-3">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.LAST_NAME} />
              </div>
            </div>

            <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <div className="sm:col-span-3 ">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.PHONE} />
              </div>

              <div className="sm:col-span-3">
                {' '}
                <Select {...ADD_FORM_BUILDER_FORM_FIELDS.GENDER} />
              </div>
            </div>
            <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <div className="sm:col-span-3 ">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.HOMETOWN} />
              </div>

              <div className="sm:col-span-3">
                {' '}
                <Select {...ADD_FORM_BUILDER_FORM_FIELDS.LANGUAGE} />
              </div>
            </div>
            <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <div className="sm:col-span-3 ">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.BIRTH_DATE} />
              </div>

              <div className="sm:col-span-3">
                {' '}
                <Select {...ADD_FORM_BUILDER_FORM_FIELDS.COUNTRY} />
              </div>
            </div>
            <div className="col-span-full  grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <div className="sm:col-span-3 ">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.COMPANY} />
              </div>

              <div className="sm:col-span-3">
                {' '}
                <Select {...ADD_FORM_BUILDER_FORM_FIELDS.MARITUAL_STATUS} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Input {...ADD_FORM_BUILDER_FORM_FIELDS.PRESENT_ADDRESS} />
            </div>
            <div className="sm:col-span-2">
              <Input {...ADD_FORM_BUILDER_FORM_FIELDS.PARMANENT_ADDRESS} />
            </div>

            <div className="col-span-full border-b border-gray-900/10 grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.CITY} />
              </div>

              <div className="sm:col-span-2">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.STATE} />
              </div>

              <div className="sm:col-span-2">
                <Input {...ADD_FORM_BUILDER_FORM_FIELDS.PINCODE} />
              </div>
            </div>
            <div className="flex col-span-full justify-end pt-3">
              <Button
                type="button"
                disabled={search.includes('notFound')}
                onClick={() => addEducation({ label: '', duration: '', description: '' })}
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
                    <Input
                      {...ADD_FORM_BUILDER_FORM_FIELDS.EDUCATION.LABEL}
                      name={`education.${[index]}.${ADD_FORM_BUILDER_FORM_FIELDS.EDUCATION.LABEL.name}`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      {...ADD_FORM_BUILDER_FORM_FIELDS.EDUCATION.DURATION}
                      name={`education.${[index]}.${ADD_FORM_BUILDER_FORM_FIELDS.EDUCATION.DURATION.name}`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      {...ADD_FORM_BUILDER_FORM_FIELDS.EDUCATION.DESCRIPTION}
                      name={`education.${[index]}.${ADD_FORM_BUILDER_FORM_FIELDS.EDUCATION.DESCRIPTION.name}`}
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
                    <Input
                      {...ADD_FORM_BUILDER_FORM_FIELDS.PROFESSION.LABEL}
                      name={`professional.${[index]}.${ADD_FORM_BUILDER_FORM_FIELDS.PROFESSION.LABEL.name}`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      {...ADD_FORM_BUILDER_FORM_FIELDS.PROFESSION.DURATION}
                      name={`professional.${[index]}.${ADD_FORM_BUILDER_FORM_FIELDS.PROFESSION.DURATION.name}`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      {...ADD_FORM_BUILDER_FORM_FIELDS.PROFESSION.DESCRIPTION}
                      name={`professional.${[index]}.${ADD_FORM_BUILDER_FORM_FIELDS.PROFESSION.DESCRIPTION.name}`}
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  disabled={professionalFields.length < 2}
                  onClick={() => professionalFields.length > 1 && removeProfessional(index)}
                  variant="danger"
                >
                  <RiCloseCircleLine size={25} />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button type="submit" className=" w-full">
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddForm;
