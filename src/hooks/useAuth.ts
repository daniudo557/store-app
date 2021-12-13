import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { Routes } from "src/configs/routes";
import {
  authenticateUser as authenticate,
  registerUser as register,
} from "src/services/authService";

export const useAuth = () => {
  const history = useHistory();

  const { isLoading: isLoadingAuthentication, mutate: authenticateUser } =
    useMutation(authenticate, {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        history.push(Routes.PRODUCT);
      },
    });

  const { isLoading: isLoadingRegister, mutate: registerUser } = useMutation(
    register,
    {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        history.push(Routes.PRODUCT);
      },
    }
  );

  return {
    isLoading: isLoadingAuthentication || isLoadingRegister,
    authenticateUser,
    registerUser,
  };
};
