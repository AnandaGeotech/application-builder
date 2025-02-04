import { userRegisterValidation } from '../validation/authentication-validation';

export const USER_REGISTER_BUILDER_FORM_FIELDS = {
  FIRST_NAME: {
    rules: userRegisterValidation.firstName,
    required: true,
    label: 'First name',
    name: 'firstName',
  },
  LAST_NAME: {
    rules: userRegisterValidation.lastName,
    required: true,
    label: 'Last name',
    name: 'lastName',
  },
  EMAIL: {
    rules: userRegisterValidation.email,
    required: true,
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
  },
  PASSWORD: {
    rules: userRegisterValidation.password,
    required: true,
    label: 'Password',
    name: 'password',
    placeholder: '********',
    type: 'password',
  },
  PHONE: {
    // rules: userRegisterValidation.lastName,
    // required: true,
    label: 'Phone',
    name: 'phone',
    placeholder: 'Enter your phone',
  },
};
