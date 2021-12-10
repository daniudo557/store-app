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
import { useLocation } from "react-router-dom";
import { Routes } from "src/configs/routes";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { pathname } = useLocation();
  const { isOpen, onClose } = props;

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
        <ListItem button selected={pathname === Routes.PRODUCT}>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Products list" />
        </ListItem>

        <ListItem button selected={pathname === Routes.CART}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="See cart" />
        </ListItem>

        <ListItem button selected={pathname === Routes.CREATE_PRODUCT}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create product" />
        </ListItem>
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
