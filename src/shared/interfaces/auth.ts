import { type JWTPayload } from "jose";

export interface IAccesToken extends JWTPayload {
  user: string;
}

export interface IUser {
  username: string;
  name: string;
  id: string;
}

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
