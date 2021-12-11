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
import { ChangeEvent, SyntheticEvent, useState } from "react";

interface RegisterUserProps {
  handleRegister: (event: SyntheticEvent) => void;
  registerName: string;
  hasRegisterNameError: boolean;
  handleChangeRegisterName: (event: ChangeEvent<HTMLInputElement>) => void;
  registerEmail: string;
  hasRegisterEmailError: boolean;
  handleChangeRegisterEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  registerUsername: string;
  hasRegisterUsernameError: boolean;
  handleChangeRegisterUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  registerPassword: string;
  hasRegisterPasswordError: boolean;
  handleChangeRegisterPassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RegisterUserForm = (props: RegisterUserProps) => {
  const {
    handleRegister,
    registerName,
    hasRegisterNameError,
    handleChangeRegisterName,
    registerEmail,
    hasRegisterEmailError,
    handleChangeRegisterEmail,
    registerUsername,
    hasRegisterUsernameError,
    handleChangeRegisterUsername,
    registerPassword,
    hasRegisterPasswordError,
    handleChangeRegisterPassword,
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

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
