import { Routes, Route } from "react-router-dom";
import OutlinedCard from "./Card";
import { Grid } from "@mui/material";
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

      <Grid container spacing={5} direction="column">
        <Grid
          item
          container
          spacing={10}
          justifyContent={"center"}
          direction={"row"}
        >
          <Grid item lg={4}>
            <OutlinedCard
              Title="sssss"
              Description="sss"
              Text="ssss"
              Text2="sss"
              Button="sss"
            />
          </Grid>
          <Grid item lg={4}>
            <OutlinedCard
              Title="sssss"
              Description="sss"
              Text="ssss"
              Text2="sss"
              Button="sss"
            />
          </Grid>
          <Grid item lg={4}>
            <OutlinedCard
              Title="sssss"
              Description="sss"
              Text="ssss"
              Text2="sss"
              Button="sss"
            />
          </Grid>
        </Grid>
        <Grid item>Table</Grid>
      </Grid>
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
    <section>
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
