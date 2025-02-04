import { emailRegex } from '@/common/utils/regex';

const validatePassword = (password: string) => {
  // Check minimum and maximum length

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }

  // Check for at least one digit
  if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  }

  // Check for at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one special character';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (password.length > 25) {
    return 'Password must not exceed 25 characters';
  }

  return true; // Password is valid
};

export const userRegisterValidation = {
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
    required: 'Email is required',
    // validate: validateEmail,
    pattern: {
      value: emailRegex,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: { value: 8, message: 'Password must be at least 8 characters' },
    maxLength: { value: 50, message: 'Password must not exceed 50 characters' },
    validate: validatePassword,
  },
};
