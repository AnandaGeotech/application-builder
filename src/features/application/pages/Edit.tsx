/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import EditForm from '../components/EditForm';
import ABPHForm from '@/common/components/form/ABForm';

/* eslint-disable max-len */

export const Component = () => (
  <div className="px-6 py-24 sm:py-32 lg:px-8 bg-bg-secondary dark:bg-bg">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-semibold tracking-tight  sm:text-5xl dark:text-white text-black">Edit User</h2>
      <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
    </div>

    <ABPHForm
      defaultValues={{
        education: [
          {
            description: '',
            duration: '',
            label: '',
          },
        ],
        professional: [
          {
            description: '',
            duration: '',
            label: '',
          },
        ],
      }}
    >
      <EditForm />
    </ABPHForm>
  </div>
);
