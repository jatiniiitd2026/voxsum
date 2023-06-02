export class LoginRequest {
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

export interface UserUpdateDetails {
  user: UserProfileDetails;
}

export interface UserProfileDetails {
    address: string
    city: string
    created:string
    email: string
    firstName: string
    id: number
    lastName: string
    optIn: boolean
    password: string
    state: string
    suspended: boolean
    zipcode: string
}

export interface PhoneDetails {
  homePhone: string;
  cellPhone: string;
}

export interface AddressDetails {
  address: string;
  state: string;
  suite: string;
  country: string;
  shippingInstructions: string;
}

export interface DealerDetails {
  dealerName: string;
  dealerCity: string;
  dealerState: string;
}


export interface LogoutResponse {
  message: string;
}
