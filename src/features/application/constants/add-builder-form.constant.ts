import { addFormBuilderValidation } from '../validation/add-form-builder-validation';

export const ADD_FORM_BUILDER_FORM_FIELDS = {
  FIRST_NAME: {
    rules: addFormBuilderValidation.firstName,
    required: true,
    label: 'First name',
    name: 'firstName',
  },
  LAST_NAME: {
    rules: addFormBuilderValidation.lastName,
    required: true,
    label: 'Last name',
    name: 'lastName',
  },
  EMAIL: {
    rules: addFormBuilderValidation.email,
    required: true,
    label: 'Email',
    name: 'email',
  },
  PHONE: {
    // rules: addFormBuilderValidation.lastName,
    // required: true,
    label: 'Phone',
    name: 'phone',
  },
  GENDER: {
    required: true,

    name: 'gender',
    label: 'Gender',
    rules: addFormBuilderValidation.gender,
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },

  PRESENT_ADDRESS: {
    label: 'Present Address',
    name: 'presentAddress',
  },
  PARMANENT_ADDRESS: {
    label: 'Permanent Address',
    name: 'permanentAddress',
  },
  BIRTH_DATE: {
    label: 'Birth Date',
    name: 'birthDate',
    type: 'date',
  },
  COMPANY: {
    label: 'Company',
    name: 'company',
  },
  COUNTRY: {
    label: 'Country',
    name: 'country',
    options: [
      { value: 'usa', label: 'United States' },
      { value: 'canada', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'india', label: 'India' },
      { value: 'australia', label: 'Australia' },
      { value: 'germany', label: 'Germany' },
    ],
  },
  HOMETOWN: {
    label: 'Hometown',
    name: 'hometown',
  },
  LANGUAGE: {
    label: 'Language',
    name: 'language',
    options: [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'french', label: 'French' },
      { value: 'german', label: 'German' },
      { value: 'mandarin', label: 'Mandarin' },
      { value: 'hindi', label: 'Hindi' },
    ],
  },
  MARITUAL_STATUS: {
    label: 'Marital Status',
    name: 'maritalStatus',
    options: [
      { value: 'single', label: 'Single' },
      { value: 'married', label: 'Married' },
      { value: 'divorced', label: 'Divorced' },
      { value: 'widowed', label: 'Widowed' },
      { value: 'separated', label: 'Separated' },
    ],
  },

  CITY: {
    // rules: addFormBuilderValidation.lastName,
    // required: true,
    label: 'City',
    name: 'city',
  },
  STATE: {
    // rules: addFormBuilderValidation.lastName,
    // required: true,
    label: 'State / Province',
    name: 'state',
  },
  PINCODE: {
    // rules: addFormBuilderValidation.lastName,
    // required: true,
    label: 'ZIP / Postal code',
    name: 'pincode',
  },
  EDUCATION: {
    DESCRIPTION: {
      label: 'Description',
      name: 'description',
    },
    DURATION: {
      label: 'Duration',
      name: 'duration',
    },
    LABEL: {
      label: 'Label',
      name: 'label',
    },
  },
  PROFESSION: {
    DESCRIPTION: {
      label: 'Description',
      name: 'description',
    },
    DURATION: {
      label: 'Duration',
      name: 'duration',
    },
    LABEL: {
      label: 'Label',
      name: 'label',
    },
  },
};
