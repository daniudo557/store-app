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
  useTheme,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Routes } from "configs/routes";
import { User } from "domains/User";
import { AppDispatch, RootState } from "redux/store";
import { saveUser } from "redux/user";

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
  setPrefersDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Appbar = ({ setPrefersDarkMode }: AppbarProps) => {
  const theme = useTheme();
  const { user } = useSelector<RootState, { user?: User }>(
    (state) => state?.user
  );

  const history = useHistory();
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => history.push(Routes.ROOT);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isUserLogged = useMemo(() => !!user, [user]);
  const prefersDarkMode = useMemo(() => theme.palette.mode === "dark", [theme]);

  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    queryClient.removeQueries();

    dispatch(saveUser(undefined));
    handleClose();

    history.push(Routes.ROOT);
  }, [dispatch, handleClose, history, queryClient]);

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
            {isUserLogged && (
              <>
                <IconButton onClick={handleToggleSidebar} color="inherit">
                  <MenuIcon />
                </IconButton>
                <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
              </>
            )}

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
