interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  designation: string;
  dateOfBirth: Date;
  address: Address;
}

interface Address {
  present: string;
  permanent: string;
  city: string;
  country: string;
  postalCode: number;
}
