export interface IRegisterUser {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  username: string;
  password: string;
}
