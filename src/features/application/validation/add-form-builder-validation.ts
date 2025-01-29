export const addFormBuilderValidation = {
  firstName: {
    required: 'First name is required',
    minLength: { value: 3, message: 'First name min 3 characters' },
    maxLength: { value: 20, message: 'First name should not exceed 20 characters' },
  },
  lastName: {
    required: 'Last name is required',
    minLength: { value: 3, message: 'Last name min 3 characters' },
    maxLength: { value: 20, message: 'Last name should not exceed 20 characters' },
  },
  gender: {
    required: 'First name is required',
  },
  email: {
    required: 'Field is required',
  },
};
