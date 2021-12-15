import { useState } from "react";
import { Card, Stack, Tab, Tabs } from "@mui/material";

import LoginUserForm from "components/LoginUserForm";
import RegisterUserForm from "components/RegisterUserForm";

import "./Welcome.scss";

const Welcome = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="card-container">
      <Card sx={{ padding: 4, width: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={tab}
            onChange={(_, newValue: number) => setTab(newValue)}
            style={{ marginBottom: "10px" }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </div>

        <Stack>{tab === 0 ? <LoginUserForm /> : <RegisterUserForm />}</Stack>
      </Card>
    </div>
  );
};

export default Welcome;
