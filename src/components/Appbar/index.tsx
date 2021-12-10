import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
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
import Sidebar from "../Sidebar";
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

interface AppbarProps {
  prefersDarkMode: boolean;
  setPrefersDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Appbar = ({ prefersDarkMode, setPrefersDarkMode }: AppbarProps) => {
  const history = useHistory();

  const handleClick = () => history.push(Routes.ROOT);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

  const handleChangeTheme = useCallback(() => {
    setPrefersDarkMode((prevMode) => !prevMode);
  }, [setPrefersDarkMode]);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <>
      <HideOnScroll>
        <AppbarMUI>
          <Toolbar>
            <IconButton onClick={handleToggleSidebar} color="inherit">
              <MenuIcon />
            </IconButton>
            <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />

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

              <div style={{ display: "flex" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleChangeTheme}
                  color="inherit"
                >
                  {prefersDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                {isUserLogged && (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </Toolbar>
        </AppbarMUI>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Appbar;
