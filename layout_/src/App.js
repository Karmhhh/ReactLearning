import "./App.css";
import RouterPath from "./Pages/RouterPath";
import Layout from "./components/Layout";
import { useContext } from "react";
import { ColorModeContext } from "./theme/context";
import { CssBaseline } from "@mui/material";
function App() {
  const { mode, toggleMode } = useContext(ColorModeContext);
  console.log(String(mode), "mode");
  return (
    <>
     <CssBaseline/>
      <Layout Outlet={<RouterPath />} ToggleMode={toggleMode} Mode={mode} />
    </>
  );
}

export default App;
