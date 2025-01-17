/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useForm } from 'react-hook-form';

const InputField = ({ label, id, type = 'text', register, validation, error }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-indigo-400/100">
      {label}
    </label>
    <input
      type={type}
      id={id}
      {...register(id, validation)}
      className={`mt-1 block w-full rounded-md bg-gradient-to-r outline-none from-slate-200 to-indigo-300/100 text-slate-900 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border-2 border-indigo-500/100 ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
  </div>
);

export const Component = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      gender: 'Male',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      pincode: '10001',
    },
  });

  // eslint-disable-next-line no-alert
  const onSubmit = (data) => alert('Form Data:', data);

  return (
    <div className="min-h-screen isolate bg-slate-800 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          /> */}
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-indigo-500/100 sm:text-5xl">
          Update User
        </h2>
        <p className="mt-2 text-lg/8 text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, necessitatibus?
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="h-32 sm:col-span-2 border border-dashed border-indigo-500/100 text-center rounded-lg">
            image
          </div>
          <InputField
            label="First Name"
            id="firstName"
            register={register}
            validation={{ required: 'First name is required' }}
            error={errors.firstName}
          />
          <InputField
            label="Last Name"
            id="lastName"
            register={register}
            validation={{ required: 'Last name is required' }}
            error={errors.lastName}
          />
          <InputField
            label="Phone"
            id="phone"
            type="tel"
            register={register}
            validation={{
              required: 'Phone number is required',
              pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' },
            }}
            error={errors.phone}
          />
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-indigo-400/100">
              Gender
            </label>
            <select
              id="gender" // This matches the "htmlFor" in the label
              {...register('gender', { required: 'Gender is required' })}
              className={`mt-1 block w-full rounded-md shadow-sm border-2 border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gradient-to-r outline-none from-slate-200 to-indigo-300/100 p-2 ${
                errors.gender ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>}
          </div>

          <InputField
            label="Address"
            id="address"
            register={register}
            validation={{ required: 'Address is required' }}
            error={errors.address}
          />
          <InputField
            label="City"
            id="city"
            register={register}
            validation={{ required: 'City is required' }}
            error={errors.city}
          />
          <InputField
            label="State"
            id="state"
            register={register}
            validation={{ required: 'State is required' }}
            error={errors.state}
          />
          <InputField
            label="Pincode"
            id="pincode"
            register={register}
            validation={{ required: 'Pincode is required' }}
            error={errors.pincode}
          />
        </div>
        <div className="mt-10 flex justify-between">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
          <button
            type="button"
            className="rounded-md border border-indigo-500/100 px-3.5 py-2.5 text-sm font-semibold text-indigo-500/100 shadow-sm hover:bg-slate-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
