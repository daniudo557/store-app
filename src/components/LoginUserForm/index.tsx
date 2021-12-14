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
import { authenticateUser } from "src/services/authService";

const LoginUserForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>("");
  const [hasUserNameError, setHasUserNameError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);

  const handleChangeUserName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newUserName = event.target.value;

      setUserName(newUserName);

      setHasUserNameError(newUserName.length < 3);
    },
    []
  );

  const handleChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;

      setPassword(newPassword);

      setHasPasswordError(newPassword.length < 3);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();

      authenticateUser({ userName, password });
    },
    [authenticateUser, password, userName]
  );

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
        placeholder="Username"
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
