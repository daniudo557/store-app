import { Toolbar, Typography } from "@mui/material";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Toolbar>
        <Typography variant="body1" color="white">
          © 2021 Store App
        </Typography>
      </Toolbar>
    </footer>
  );
};

export default Footer;
