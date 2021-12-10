import { Container } from "@mui/material";
import React from "react";
import "./Wrapper.scss";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container className="container" sx={{ bgcolor: "background.default" }}>
      <div className="content">{children}</div>
    </Container>
  );
};

export default Wrapper;
