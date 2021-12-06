import { Typography } from "@mui/material";

import "./Warning.scss";

interface WarningProps {
  icon: JSX.Element;
  message: string;
}
const Warning = (props: WarningProps) => {
  const { icon, message } = props;

  return (
    <div className="empty-container">
      {icon}
      <Typography variant="h5" component="h5">
        {message}
      </Typography>
    </div>
  );
};
export default Warning;
