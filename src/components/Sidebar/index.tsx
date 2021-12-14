import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "src/configs/routes";
import { User } from "src/domains/User";
import { RootState } from "src/redux/store";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { user } = useSelector<RootState, { user?: User }>(
    (state) => state?.user
  );
  const { isOpen, onClose } = props;

  const isSuperUser = useMemo(() => user?.role === 1, [user]);

  const drawer = (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: 256,
        }}
      >
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          selected={pathname === Routes.PRODUCT}
          onClick={() => history.push(Routes.PRODUCT)}
        >
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Products list" />
        </ListItem>

        <ListItem
          button
          selected={pathname === Routes.CART}
          onClick={() => history.push(Routes.CART)}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="See cart" />
        </ListItem>

        {isSuperUser && (
          <ListItem
            button
            selected={pathname === Routes.CREATE_PRODUCT}
            onClick={() => history.push(Routes.CREATE_PRODUCT)}
          >
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create product" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
