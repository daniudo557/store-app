import { Card, Stack, Tab, Tabs } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import LoginUserForm from "src/components/LoginUserForm";
import RegisterUserForm from "src/components/RegisterUserForm";

import { Routes } from "src/configs/routes";

import "./Welcome.scss";

const Welcome = () => {
  const history = useHistory();

  const [tab, setTab] = useState<number>(0);

  // === Login ===
  const [userName, setUserName] = useState<string>("");
  const [hasUserNameError, setHasUserNameError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);

  // === Register ===
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

  console.log({ registerName });
  console.log({ registerEmail });
  console.log({ registerUsername });
  console.log({ registerPassword });

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
      history.push(Routes.PRODUCT);
    },
    [history]
  );

  const handleChangeRegisterName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterName = event.target.value;

      setRegisterName(newRegisterName);

      setHasRegisterNameError(newRegisterName.length < 1);
    },
    []
  );

  const handleChangeRegisterEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterEmail = event.target.value;
      const isValidEmail = /^[^@\s]+@[^@\s.]+.[^@.\s]+(.[a-z]+)?$/.test(
        newRegisterEmail
      );

      setRegisterEmail(newRegisterEmail);

      setHasRegisterEmailError(!isValidEmail);
    },
    []
  );

  const handleChangeRegisterUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterUsername = event.target.value;

      setRegisterUsername(newRegisterUsername);

      setHasRegisterUsernameError(newRegisterUsername.length < 3);
    },
    []
  );

  const handleChangeRegisterPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newRegisterPassword = event.target.value;

      setRegisterPassword(newRegisterPassword);

      setHasRegisterPasswordError(newRegisterPassword.length < 3);
    },
    []
  );

  const handleRegister = useCallback(
    (event: SyntheticEvent) => {
      const newUser = {
        name: registerName,
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      };

      console.log({ newUser });
      event.preventDefault();
      history.push(Routes.ROOT);
    },
    [history]
  );

  return (
    <div className="card-container">
      <Card sx={{ padding: 4, width: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={tab}
            onChange={(event: React.SyntheticEvent, newValue: number) =>
              setTab(newValue)
            }
            style={{ marginBottom: "10px" }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </div>

        <Stack sx={{ margin: 0 }}>
          {tab === 0 ? (
            <LoginUserForm
              userName={userName}
              hasUserNameError={hasUserNameError}
              handleChangeUserName={handleChangeUserName}
              password={password}
              hasPasswordError={hasPasswordError}
              handleChangePassword={handleChangePassword}
              handleSubmit={handleSubmit}
            />
          ) : (
            <RegisterUserForm
              handleRegister={handleRegister}
              registerName={registerName}
              hasRegisterNameError={hasRegisterNameError}
              handleChangeRegisterName={handleChangeRegisterName}
              registerEmail={registerEmail}
              hasRegisterEmailError={hasRegisterEmailError}
              handleChangeRegisterEmail={handleChangeRegisterEmail}
              registerUsername={registerUsername}
              hasRegisterUsernameError={hasRegisterUsernameError}
              handleChangeRegisterUsername={handleChangeRegisterUsername}
              registerPassword={registerPassword}
              hasRegisterPasswordError={hasRegisterPasswordError}
              handleChangeRegisterPassword={handleChangeRegisterPassword}
            />
          )}
        </Stack>
      </Card>
    </div>
  );
};

export default Welcome;
