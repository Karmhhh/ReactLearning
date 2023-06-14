import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import PeopleIcon from "@mui/icons-material/People";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const SidebarMui = () => {
  const renderMenuItems = () => {
    var MenuOptions = [
      {
        SubMenuLabel: "Clients",
        iconSubMenu: () => {
          return <PeopleIcon />;
        },
        MenuItems: [
          { to: "dashboard", name: "Clients Dashboard" },
          { to: "clientPresets", name: "Client Presets" },
        ],
      },
      {
        SubMenuLabel: "Settings",
        iconSubMenu: () => {
          return <SettingsApplicationsRoundedIcon />;
        },
        MenuItems: [
          { to: "Account", name: "Account" },
          { to: "Privacy", name: "Privacy" },
          { to: "Notification", name: "Notification" },
        ],
      },
      {
        Label: "Logout",
        to: "Logout",
        icon: () => {
          return <LogoutRoundedIcon />;
        },
      },
    ];

    return (
      <>
        {MenuOptions.map((menuOption) => {
          return (
            <>
              {menuOption.MenuItems && (
                <SubMenu
                  label={menuOption.SubMenuLabel}
                  icon={menuOption.iconSubMenu()}
                >
                  {menuOption.MenuItems.map((menuItem) => {
                    return (
                      <>
                        <MenuItem
                          component={<Link to={menuItem.to} className="link" />}
                          // icon={<GridViewRoundedIcon /> }
                        >
                          {menuItem.name}
                        </MenuItem>
                      </>
                    );
                  })}
                </SubMenu>
              )}
              {!menuOption.MenuItems && (
                <MenuItem
                  component={<Link to={menuOption.to} className="link" />}
                  icon={menuOption.icon()}
                >
                  {menuOption.Label}
                </MenuItem>
              )}
            </>
          );
        })}
      </>
    );
  };

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <>
      <Sidebar >
        <Menu>
          <MenuItem
            className="menu1"
            icon={<MenuRoundedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          ></MenuItem>
          {renderMenuItems()}
        </Menu>
      </Sidebar>
    </>
  );
};
export default SidebarMui;
