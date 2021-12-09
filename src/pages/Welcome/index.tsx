import { Button, Card, Stack, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

const Welcome = () => {
  const [userName, setUserName] = useState<string>();
  const [hasUserNameError, setHasUserNameError] = useState<boolean>();

  const [password, setPassword] = useState<string>();
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;

    setUserName(newUserName);

    setHasUserNameError(newUserName.length < 3);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;

    setPassword(newPassword);

    setHasPasswordError(newPassword.length < 3);
  };

  return (
    <Card sx={{ padding: 4, width: "auto" }}>
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

        <Button variant="contained">Login</Button>
      </Stack>
    </Card>
  );
};

export default Welcome;
