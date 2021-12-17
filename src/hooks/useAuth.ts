import { Routes } from "configs/routes";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDispatch } from "redux/store";
import { saveUser } from "redux/user";
import {
  authenticateUser as authenticate,
  registerUser as register,
} from "services/authService";

export const useAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading: isLoadingAuthentication, mutate: authenticateUser } =
    useMutation(authenticate, {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        dispatch(saveUser(res.user));

        history.push(Routes.PRODUCT);

        enqueueSnackbar("Logged successfully", {
          variant: "success",
        });
      },
      onError: ({ response }) => {
        enqueueSnackbar(`${response.data.error}`, {
          variant: "error",
        });
      },
    });

  const { isLoading: isLoadingRegister, mutate: registerUser } = useMutation(
    register,
    {
      onSuccess: (res) => {
        localStorage.setItem("token", res.token);
        dispatch(saveUser(res.user));

        history.push(Routes.PRODUCT);

        enqueueSnackbar("Registered successfully", {
          variant: "success",
        });
      },
      onError: ({ response }) => {
        enqueueSnackbar(`${response.data.error}`, {
          variant: "error",
        });
      },
    }
  );

  return {
    isLoading: isLoadingAuthentication || isLoadingRegister,
    authenticateUser,
    registerUser,
  };
};
