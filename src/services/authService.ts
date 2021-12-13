import { Endpoints } from "src/configs/endpoints";
import { User } from "src/domains/User";
import RequestService from "./requestService";

export const authenticateUser = (
  user: Partial<User>
): Promise<{ user: User; token: string }> => {
  return RequestService.post<{ user: User; token: string }>(
    Endpoints.AUTHENTICATE,
    user
  ).then((respnse) => {
    return respnse.data;
  });
};

export const registerUser = (
  user: Partial<User>
): Promise<{ user: User; token: string }> => {
  return RequestService.post<{ user: User; token: string }>(
    Endpoints.REGISTER,
    user
  ).then((respnse) => respnse.data);
};
