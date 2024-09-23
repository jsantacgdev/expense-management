import { type JWTPayload } from "jose";

export interface IAccesToken extends JWTPayload {
  user: string;
}
