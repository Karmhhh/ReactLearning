import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PeopleIcon from "@mui/icons-material/People";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Typography} from "@mui/material";

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
          { to: "clientPresets", name: "New Client" },
        ],
      },

      {
        SubMenuLabel: "Devices",
        iconSubMenu: () => {
          return <DeveloperModeIcon />;
        },
        MenuItems: [
          { to: "", name: "Tcp/SMS Commands" },
          { to: "", name: "Unit Management" },
          { to: "", name: "Search Device" },
          { to: "", name: "New Device" },
          { to: "", name: "Firmware" },
          { to: "", name: "Calibration Library" },
          { to: "", name: "Raw Data Logs" },
          { to: "", name: "Import Devices" },
          { to: "", name: "Route Calculation Preset" },
        ],
      },
      {
        SubMenuLabel: "Fuel Rods",
        iconSubMenu: () => {
          return <LocalGasStationIcon />;
        },
        MenuItems: [{ to: "", name: "Sensors" }],
      },

      {
        SubMenuLabel: "WareHouse",
        iconSubMenu: () => {
          return <WarehouseIcon />;
        },
        MenuItems: [
          { to: "", name: "My Warehouse" },
       
        ],
      },
      {
        SubMenuLabel: "Support",
        iconSubMenu: () => {
          return <HelpOutlineIcon />;
        },
        MenuItems: [
          { to: "", name: "Support Calendar" },
          { to: "", name: "Driver Behavior Dash" },
          { to: "", name: "Error Registry" },
          { to: "", name: "Tachograph Status" },
          { to: "", name: "Device Orders" },
        ],
      },
      {
        SubMenuLabel: "Settings",
        iconSubMenu: () => {
          return <SettingsApplicationsRoundedIcon />;
        },
        MenuItems: [
          { to: "Account", name: "Account" },
          { to: "Users", name: "Users" },
          { to: "Privacy", name: "Privacy" },
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
        {MenuOptions.map((menuOption, index) => {
          return (
            <>
              {menuOption.MenuItems && (
                <Typography sx={{ "&:hover": { color: "black", background:'white' } }}>
                  <SubMenu
                    key={index}
                    label={menuOption.SubMenuLabel}
                    icon={menuOption.iconSubMenu()}
                  >
                    {menuOption.MenuItems.map((menuItem, index2) => {
                      return (
                        <Typography sx={{   color: "black" }}>
                        <MenuItem
                          key={index2}
                          component={<Link to={menuItem.to} className="link" />}
                    
                        >
                          {menuItem.name}
                        </MenuItem>
                        </Typography>
                      );
                    })}
                  </SubMenu>
                </Typography>
              )}

              {!menuOption.MenuItems && (
                <Typography  sx={{"&:hover": { color: "black" } }}>
                  <MenuItem
                    key={index}
                    component={<Link to={menuOption.to} className="link" />}
                    icon={menuOption.icon()}
                  >
                    {menuOption.Label}
                  </MenuItem>
                </Typography>
              )}
            </>
          );
        })}
      </>
    );
  };

  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <Sidebar className="sidebar" style={{ color: "white", height: "95vh" }}>
        <Menu>
        <Typography sx={{ "&:hover": { color: "black" } }}>
          <MenuItem
            className="menu1"
            icon={<MenuRoundedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          ></MenuItem>
          </Typography>
          {renderMenuItems()}
        </Menu>
      </Sidebar>
    </>
  );
};
export default SidebarMui;
