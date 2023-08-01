import { Endpoints } from "configs/endpoints";
import { User } from "domains/User";
import RequestService from "./requestService";

export const authenticateUser = (user: Partial<User>) =>
  RequestService.post<{ user: User; token: string }>(
    Endpoints.AUTHENTICATE,
    user,
  ).then((respnse) => respnse.data);

export const registerUser = (user: Partial<User>) =>
  RequestService.post<{ user: User; token: string }>(
    Endpoints.REGISTER,
    user,
  ).then((respnse) => respnse.data);
