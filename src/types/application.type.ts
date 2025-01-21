export type IApplicationUser = {
  firstName: string;
  lastName: string;
  phone: string;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  city: string;
  state: string;
  pincode: string;
  id?: string;
};
