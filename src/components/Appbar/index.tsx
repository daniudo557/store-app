import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar as AppbarMUI,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "src/configs/routes";
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

  const handleClick = () => history.push(Routes.ROOT);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isUserLogged = useMemo(() => true, []);

  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogout = useCallback(() => {
    console.log("Logout!!");

    handleClose();

    history.push(Routes.ROOT);
  }, [handleClose, history]);

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
              <MenuIcon />
            </IconButton>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <Typography
                onClick={handleClick}
                variant="h6"
                component="a"
                className="header-link"
                sx={{ alignSelf: "center" }}
              >
                Store App
              </Typography>

              {isUserLogged && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </Toolbar>
        </AppbarMUI>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Appbar;
