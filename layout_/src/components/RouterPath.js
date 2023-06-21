import { Routes, Route, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import OutlinedCard from "./Card";
import { Grid } from "@mui/material";
import Table from "./DataGridMui";
import Layout from "./Layout";
import { Box } from "@mui/material";
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
  const cards = [
    {
      Subtitle: "Subtitle",
      Title: "Title",
      Description: "Desciption",
      Text: "Text",
      Text2: "Text2",
      Button: "Button",
    },
    {
      Subtitle: "SubtitleCard2",
      Title: "TitleCard2",
      Description: "DesciptionCard2",
      Text: "TextCard2",
      Text2: "Text2Card2",
      Button: "ButtonCard2",
    },
    {
      Subtitle: "SubtitleCard3",
      Title: "TitleCard3",
      Description: "DesciptionCard3",
      Text: "TextCard3",
      Text2: "Text2Card3",
      Button: "ButtonCard3",
    },
  ];
  const [
    columns,
    // setColumns
  ] = useState([
    { field: "id", headerName: "ID", maxWidth: 100 },
    {
      field: "TodoName",
      headerName: "Todos Name",
      maxWidth: 600,
    },
    { field: "completed", headerName: "Status", maxWidth: 120 },
  ]);
  const [rows, setRows] = useState([
    { id: 1, TodoName: "Stydy", completed: false },
    { id: 2, TodoName: "Eat", completed: false },
    { id: 3, TodoName: "Sleep", completed: false },
    { id: 4, TodoName: "Drink", completed: false },
    { id: 5, TodoName: "Walk", completed: false },
    { id: 6, TodoName: "Hit Gym", completed: false },
    { id: 7, TodoName: "Go work", completed: false },
    { id: 8, TodoName: "Dance", completed: false },
    { id: 9, TodoName: "Talk", completed: false },
  ]);

  return (
    <>
      <Grid item container spacing={3} direction="column">
        <Grid item>
          <h1 className="header"> Clients Dashboard</h1>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          justifyContent={"center"}
          columnGap={"4rem"}
          direction={"row"}
        >
          {cards.map((card) => {
            return (
              <Grid key={card.Title} item xl={3} lg={3} md={5} sm={12} xs={12}>
                <OutlinedCard
                  Subtitle={card.Subtitle}
                  Title={card.Title}
                  Description={card.Description}
                  Text={card.Text}
                  Text2={card.Text2}
                  Button={card.Button}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container item>
          <Box
            sx={{ width: "100%" }}
            style={{ minWidth: "30vh", overflow: "auto" }}
          >
            {" "}
            <Table columns={columns} rows={rows} setRows={setRows} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const ClientPresets = () => {
  return (
    <>
      <h1 className="header">Client Presets</h1>
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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "clientPresets", element: <ClientPresets /> },
      { path: "logout", element: <Logout /> }
    ],
  },
]);

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
