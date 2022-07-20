export interface UsersInterface {
  id: string,
  fName: string,
  mName: string,
  lName: string,
  email: string,
  phone: string,
  roles: string,
  address: string,
  dateCreated: string
}

// Validation
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}