import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="header">This is the home!</h1>
      <h3>title</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <h1 className="header"> Clients Dashboard</h1>
      <h3>Welcome </h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const ClientPresets = () => {
  return (
    <>
      <h1 className="header">ClientPresets</h1>
      <h3>title</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};
const Logout = () => {
  return (
    <>
      <h1 className="header">LogOut</h1>
      <h3>title</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const RouterPath = () => {
  return (
    <section >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clientPresets" element={<ClientPresets />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </section>
  );
};

export default RouterPath;
