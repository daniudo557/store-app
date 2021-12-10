import { Button, Card, Stack, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "src/configs/routes";
import "./Welcome.scss";

const Welcome = () => {
  const history = useHistory();

  const [userName, setUserName] = useState<string>();
  const [hasUserNameError, setHasUserNameError] = useState<boolean>();

  const [password, setPassword] = useState<string>();
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

      console.log("Login!!");

      history.push(Routes.PRODUCT);
    },
    [history]
  );

  return (
    <div className="card-container">
      <Card sx={{ padding: 4, width: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Stack sx={{ margin: 0 }}>
            <TextField
              value={userName ?? ""}
              error={hasUserNameError}
              helperText={
                hasUserNameError && "User must have more than 3 characters"
              }
              placeholder="User"
              sx={{ paddingBottom: 2 }}
              onChange={handleChangeUserName}
            />
            <TextField
              value={password ?? ""}
              error={hasPasswordError}
              helperText={
                hasPasswordError && "Password must have more than 3 characters"
              }
              placeholder="Password"
              sx={{ paddingBottom: 4 }}
              onChange={handleChangePassword}
            />

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
          </Stack>
        </form>
      </Card>
    </div>
  );
};

export default Welcome;
