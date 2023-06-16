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
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WarehouseIcon from '@mui/icons-material/Warehouse';



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
          { to: "", name: "Other" },
          { to: "", name: "Other2" },
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
          { to: "", name: "other" },
          { to: "", name: "other" },
          { to: "", name: "other" },
        ],
      },
      {
        SubMenuLabel: "Support",
        iconSubMenu: () => {
          return <   HelpOutlineIcon />;
        },
        MenuItems: [
          { to: "", name: "other" },
          { to: "", name: "other" },
          { to: "", name: "other" },
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
        {MenuOptions.map((menuOption) => {
          return (
            <>
              {menuOption.MenuItems && (
                <SubMenu
                  key={menuOption.SubMenuLabel }
                  label={menuOption.SubMenuLabel}
                  icon={menuOption.iconSubMenu()}
                >
                  {menuOption.MenuItems.map((menuItem) => {
                    return (
                      <>
                        <MenuItem
                          key={menuItem.name}
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
                  key={menuOption.name}
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

  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <Sidebar style={{ background: "#004494", height: "100vh" }}>
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
