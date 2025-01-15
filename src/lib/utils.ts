import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// capitalize a string
export const capitalize = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();

export const staticFormData = [
  {
    id: 'name',
    type: 'string',
    label: 'Name',
    placeholder: 'Enter your name',
    required: true,
    length: {
      min: 1,
      max: 100,
    },
    defaultValue: 'John Doe',
  },
  {
    id: 'age',
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
    required: true,
    min: 1,
    max: 120,
    defaultValue: 30,
  },
  {
    id: 'newsletter',
    type: 'boolean',
    label: 'Subscribe to newsletter',
    required: false,
    defaultValue: true,
  },
  {
    id: 'gender',
    type: 'select',
    label: 'Gender',
    required: true,
    options: [
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
      {
        label: 'Other',
        value: 'other',
      },
    ],
    defaultValue: 'male',
  },
  {
    id: 'email',
    type: 'string',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    length: {
      min: 5,
      max: 100,
    },
    defaultValue: 'johndoe@example.com',
  },
  {
    id: 'terms',
    type: 'boolean',
    label: 'Accept Terms and Conditions',
    required: true,
    defaultValue: true,
  },
  {
    id: 'phone',
    type: 'string',
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    required: true,
    pattern: '^[0-9]{10}$',
    defaultValue: '9876543210',
  },
  {
    id: 'address',
    type: 'textarea',
    label: 'Address',
    placeholder: 'Enter your address',
    required: false,
    length: {
      min: 10,
      max: 500,
    },
    defaultValue: '1234 Elm St, Springfield, IL, 62701',
  },
  {
    id: 'country',
    type: 'select',
    label: 'Country',
    required: true,
    options: [
      {
        label: 'United States',
        value: 'us',
      },
      {
        label: 'Canada',
        value: 'ca',
      },
      {
        label: 'United Kingdom',
        value: 'uk',
      },
      {
        label: 'Australia',
        value: 'au',
      },
    ],
    defaultValue: 'us',
  },
  {
    id: 'dob',
    type: 'date',
    label: 'Date of Birth',
    required: true,
    min: '1900-01-01',
    max: '2025-01-01',
    defaultValue: '1990-01-01',
  },
  {
    id: 'color',
    type: 'color',
    label: 'Favorite Color',
    required: false,
    defaultValue: '#ff5733',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
    length: {
      min: 8,
      max: 50,
    },
    defaultValue: 'secureP@ss123',
  },
  {
    id: 'profilePicture',
    type: 'file',
    label: 'Profile Picture',
    required: false,
    accept: ['image/png', 'image/jpeg'],
    defaultValue: false,
  },
  {
    id: 'skills',
    type: 'checkbox',
    label: 'Skills',
    required: false,
    options: [
      {
        label: 'JavaScript',
        value: 'javascript',
      },
      {
        label: 'Python',
        value: 'python',
      },
      {
        label: 'React',
        value: 'react',
      },
      {
        label: 'Node.js',
        value: 'nodejs',
      },
    ],
    defaultValue: ['javascript', 'react'],
  },
  {
    id: 'experience',
    type: 'number',
    label: 'Years of Experience',
    placeholder: 'Enter your years of experience',
    required: true,
    min: 0,
    max: 50,
    defaultValue: 5,
  },
  {
    id: 'bio',
    type: 'textarea',
    label: 'Short Bio',
    placeholder: 'Tell us about yourself',
    required: false,
    length: {
      min: 50,
      max: 500,
    },
    defaultValue: 'I am a passionate developer with experience in web technologies.',
  },
];
