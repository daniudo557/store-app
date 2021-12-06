import React from "react";
import "./Wrapper.scss";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="container">
      <div className="content">{children}</div>
    </div>
  );
};

export default Wrapper;
