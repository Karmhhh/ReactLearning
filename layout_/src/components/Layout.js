import SidebarMui from "./Sidebar";
import NavBarMui from "./NavBar";
import {Box} from "@mui/material";
import { Grid } from "@mui/material";
const Layout = (props) => {
  return (
    <>
      <Grid container direction={"column"}  sx={{width: '100%'}}>
        <Grid item>
          <NavBarMui />
        </Grid>
        <Grid container spacing={3} item columnSpacing={10} direction={"row"} sx={{maxHeight:'90vh'}}>
          <Grid item lg={'auto'} md={1} xs={2.5}>
            <SidebarMui />
          </Grid>

          <Grid item lg={9.5} md={10.5} xs={9.5} padding={2} >
          <Box sx={{width:'100%'}} style={{maxHeight: '90vh', overflow: 'auto'}}>{props.Outlet}</Box>
        
            </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;

