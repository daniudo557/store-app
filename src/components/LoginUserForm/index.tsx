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

interface LoginFormProps {
  userName: string;
  hasUserNameError: boolean;
  handleChangeUserName: (event: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  hasPasswordError: boolean;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: SyntheticEvent) => void;
}

const LoginUserForm = (props: LoginFormProps) => {
  const {
    handleSubmit,
    userName,
    hasUserNameError,
    handleChangeUserName,
    password,
    hasPasswordError,
    handleChangePassword,
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        value={userName}
        error={hasUserNameError}
        label="Username"
        helperText={hasUserNameError && "User must have more than 3 characters"}
        placeholder="User"
        sx={{ paddingBottom: 2 }}
        onChange={handleChangeUserName}
      />
      <FormControl variant="outlined" style={{ paddingBottom: "16px" }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          value={password}
          error={hasPasswordError}
          label="Password"
          placeholder="Password"
          onChange={handleChangePassword}
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
        {hasPasswordError && (
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
          !userName || !password || hasUserNameError || hasPasswordError
        }
      >
        Login
      </Button>
    </form>
  );
};

export default LoginUserForm;
