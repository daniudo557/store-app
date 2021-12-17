import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Routes } from "configs/routes";
import {
  authenticateUser as authenticate,
  registerUser as register,
} from "services/authService";

import { AppDispatch } from "redux/store";
import { saveUser } from "redux/user";

export const useAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading: isLoadingAuthentication, mutate: authenticateUser } =
    useMutation(authenticate, {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        dispatch(saveUser(res.user));
        history.push(Routes.PRODUCT);
      },
    });

  const { isLoading: isLoadingRegister, mutate: registerUser } = useMutation(
    register,
    {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        dispatch(saveUser(res.user));
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
