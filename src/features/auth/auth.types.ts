export interface SignupFormData {
  email: string;
  password: string;
  cfmPassword: string;
  fname: string;
  lname: string;
}

export interface SigninFormData {
  email: string;
  password: string;
}

export interface AuthUser {
  uid: string;
  displayName: string | null;
  email: string;
  photoUrl: string;
}
