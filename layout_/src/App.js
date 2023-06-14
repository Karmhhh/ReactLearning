import "./App.css";
import RouterPath from "./components/RouterPath";
import SidebarMui from "./components/Sidebar";
import NavBarMui from "./components/NavBar";
import { Grid } from "@mui/material";
function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
        <SidebarMui  />
    
      <Grid  container  direction={'column'}   >
        <Grid item  lg={1} >
          <NavBarMui />
        </Grid>
        
        <Grid item padding={4} lg={11}>
          <RouterPath  />
        </Grid>
      </Grid>
</div>
  );
}

export default App;
