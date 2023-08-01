import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { useAuth } from "src/hooks/useAuth";

const RegisterUserForm = () => {
  const { registerUser } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [registerName, setRegisterName] = useState<string>("");
  const [hasRegisterNameError, setHasRegisterNameError] =
    useState<boolean>(false);

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [hasRegisterEmailError, setHasRegisterEmailError] =
    useState<boolean>(false);

  const [registerUsername, setRegisterUsername] = useState<string>("");
  const [hasRegisterUsernameError, setHasRegisterUsernameError] =
    useState<boolean>(false);

  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [hasRegisterPasswordError, setHasRegisterPasswordError] =
    useState<boolean>(false);

  const handleChangeRegisterName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterName = event.target.value;

      setRegisterName(newRegisterName);

      setHasRegisterNameError(newRegisterName.length < 1);
    },
    [],
  );

  const handleChangeRegisterEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterEmail = event.target.value;
      const isValidEmail = /^[^@\s]+@[^@\s.]+.[^@.\s]+(.[a-z]+)?$/.test(
        newRegisterEmail,
      );

      setRegisterEmail(newRegisterEmail);

      setHasRegisterEmailError(!isValidEmail);
    },
    [],
  );

  const handleChangeRegisterUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterUsername = event.target.value;

      setRegisterUsername(newRegisterUsername);

      setHasRegisterUsernameError(newRegisterUsername.length < 3);
    },
    [],
  );

  const handleChangeRegisterPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterPassword = event.target.value;

      setRegisterPassword(newRegisterPassword);

      setHasRegisterPasswordError(newRegisterPassword.length < 3);
    },
    [],
  );

  const handleRegister = useCallback(
    (event: SyntheticEvent) => {
      const newUser = {
        name: registerName,
        email: registerEmail,
        userName: registerUsername,
        password: registerPassword,
      };

      event.preventDefault();

      registerUser(newUser);
    },
    [
      registerName,
      registerEmail,
      registerUsername,
      registerPassword,
      registerUser,
    ],
  );

  return (
    <form
      onSubmit={handleRegister}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        value={registerName}
        error={hasRegisterNameError}
        label="Name"
        helperText={hasRegisterNameError && "Name must not be empty"}
        placeholder="Name"
        sx={{ paddingBottom: 2 }}
        onChange={handleChangeRegisterName}
      />
      <TextField
        value={registerEmail}
        error={hasRegisterEmailError}
        label="E-mail"
        helperText={hasRegisterEmailError && "Invalid e-mail"}
        placeholder="Email"
        sx={{ paddingBottom: 2 }}
        onChange={handleChangeRegisterEmail}
      />
      <TextField
        value={registerUsername}
        label="Username"
        error={hasRegisterUsernameError}
        helperText={
          hasRegisterUsernameError &&
          "Username must have more than 3 characters"
        }
        placeholder="Username"
        sx={{ paddingBottom: 2 }}
        onChange={handleChangeRegisterUsername}
      />
      <FormControl variant="outlined" style={{ paddingBottom: "16px" }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          value={registerPassword}
          error={hasRegisterPasswordError}
          label="Password"
          placeholder="Password"
          onChange={handleChangeRegisterPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {hasRegisterPasswordError && (
          <FormHelperText error id="accountId-error">
            Password must have more than 3 characters
          </FormHelperText>
        )}
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        value="Submit"
        disabled={
          !registerName ||
          !registerEmail ||
          !registerUsername ||
          !registerPassword ||
          hasRegisterNameError ||
          hasRegisterEmailError ||
          hasRegisterPasswordError
        }
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterUserForm;
