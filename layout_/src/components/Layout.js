import SidebarMui from "./Sidebar";
import NavBarMui from "./NavBar";
import { Grid } from "@mui/material";
const Layout = (props) => {
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <NavBarMui />
        </Grid>
        <Grid container spacing={4} item direction={"row"}>
          <Grid item lg={'auto'}>
            <SidebarMui />
          </Grid>

          <Grid item lg={9.5}>
            {props.Outlet}
            </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
