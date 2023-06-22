import SidebarMui from "./Sidebar";
import NavBarMui from "./NavBar";
import { Box, Stack, Button } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{ width: "100%" }}
        justifyContent={"center"}
      >
        <NavBarMui />

        {/* <Grid
          item
          direction={"row"}
          sx={{ maxHeight: "90vh" }}
        > */}
        <Stack direction={"row"}>
          <SidebarMui />

          <Box
            bgcolor={"bg.bgOutlet"}
            margin={2}
            padding={4}
            sx={{ width: "100%" }}
            maxHeight="80vh"
            overflow="auto"
          >
            {props.Outlet}
          </Box>
        </Stack>
        {/* <Grid item lg={"auto"} md={1} xs={2.5}></Grid>

          <Grid item lg={9.5} md={10.5} xs={9.5}></Grid> */}
        {/* </Grid> */}
        <Button color="primary" onClick={() => props.ToggleMode()}>
          Switch Mode
        </Button>
      </Stack>
    </>
  );
};

export default Layout;
