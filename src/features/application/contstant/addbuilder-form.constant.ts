import { addFormbuilderValidation } from '../validation/add-formbuilder-validation';

export const ADD_FORMBUILDER_FORM_FIELDS = {
  FIRST_NAME: {
    rules: addFormbuilderValidation.firstName,
    required: true,
    label: 'First name',
    name: 'firstName',
  },
  LAST_NAME: {
    rules: addFormbuilderValidation.lastName,
    required: true,
    label: 'Last name',
    name: 'lastName',
  },
  EMAIL: {
    rules: addFormbuilderValidation.email,
    required: true,
    label: 'Email',
    name: 'email',
  },
  PHONE: {
    // rules: addFormbuilderValidation.lastName,
    // required: true,
    label: 'Phone',
    name: 'phone',
  },
  GENDER: {
    required: true,

    name: 'gender',
    label: 'Gender',
    rules: addFormbuilderValidation.gender,
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },

  ADDRESS: {
    // rules: addFormbuilderValidation.lastName,
    // required: true,
    label: 'Address',
    name: 'address',
  },
  CITY: {
    // rules: addFormbuilderValidation.lastName,
    // required: true,
    label: 'City',
    name: 'city',
  },
  STATE: {
    // rules: addFormbuilderValidation.lastName,
    // required: true,
    label: 'State / Province',
    name: 'state',
  },
  PINCODE: {
    // rules: addFormbuilderValidation.lastName,
    // required: true,
    label: 'ZIP / Postal code',
    name: 'pincode',
  },
};
