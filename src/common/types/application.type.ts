export interface Education {
  description: string;
  duration: string;
  label: string;
}

export interface Profession {
  description: string;
  duration: string;
  label: string;
}

export type ILoginUser = {
  password: string;
  email: string;
};
export type IRegisterUser = {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type IApplicationUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  presentAddress: string;
  permanentAddress: string;
  birthDate: string;
  company: string;
  country: string;
  hometown: string;
  language: string;
  maritalStatus: string;
  city: string;
  state: string;
  pincode: string;
  education: Education[];
  profession: Profession[];
  id: string;
};

export type IProduct = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  presentAddress: string;
  permanentAddress: string;
  birthDate: string;
  company: string;
  country: string;
  hometown: string;
  language: string;
  maritalStatus: string;
  city: string;
  state: string;
  pincode: string;
  education: Education[];
  profession: Profession[];
  id: string;
};
