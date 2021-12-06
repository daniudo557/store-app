import {
  AppBar as AppbarMUI,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import { AccountCircle, Menu } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import "./Appbar.scss";

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Appbar = () => {
  const history = useHistory();

  const handleClick = () => history.push(`/`);

  return (
    <>
      <HideOnScroll>
        <AppbarMUI>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>

            <Typography
              onClick={handleClick}
              variant="h6"
              component="a"
              className="header-link"
              sx={{ flexGrow: 1 }}
            >
              Store App
            </Typography>

            <IconButton size="large" color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppbarMUI>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Appbar;
