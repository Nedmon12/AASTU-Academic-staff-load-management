// material-ui
import { Typography } from "@mui/material";

// project imports
import NavGroup from "./NavGroup";
import menuItem from "../../../../menu-items/index";
import NavItem from "./NavItem";

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = (props) => {
  console.log('in menulist: ', props.sideBarStatus)
  const navItems = menuItem.items.map((item) => {
    console.log("inside menuItems");
    switch (item.type) {
      case "group":
        console.log("items: ", item);
        return <NavGroup key={item.id} item={item} sideBarStatus={props.sideBarStatus}/>;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
