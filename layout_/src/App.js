import "./App.css";
import RouterPath from "./components/RouterPath";
import SidebarMui from "./components/Sidebar";
import NavBarMui from "./components/NavBar";
import { Grid } from "@mui/material";
function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarMui />

      <Grid container direction={"column"}>
        <Grid item xl={1} lg={1} md={1} sm={1}>
          <NavBarMui />
        </Grid>

        <Grid item xl={11} padding={3} lg={11}>
          <RouterPath />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
