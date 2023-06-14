import "./App.css";
import RouterPath from "./components/RouterPath";
import SidebarMui from "./components/Sidebar";

function App() {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarMui />
      <RouterPath />
    </div>
  );
}

export default App;
