import "./App.css";
import RouterPath from "./components/RouterPath";
import Layout from "./components/Layout";

import { Grid } from "@mui/material";
function App() {
  return (
    <>
    <Layout
     Outlet={<RouterPath />}
    />
    </>
  );
}

export default App;
