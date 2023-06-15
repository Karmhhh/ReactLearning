import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import OutlinedCard from "./Card";
import { Grid } from "@mui/material";
import Table from './DataGridMui'




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
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 100 },
    { field: "TodoName", headerName: "Todos Name", width: 600 },
    { field: "completed", headerName: "Status", width: 120 },
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
      <h1 className="header"> Clients Dashboard</h1>

      <Grid container item spacing={5} direction="column">
        <Grid
          item
          container
          spacing={3}
          justifyContent={"center"}
          direction={"row"}
          
        >
          {cards.map((card) => {
            return (
              <>
                <Grid item  lg={4} md={4} sm={4} xs={9}>
                  <OutlinedCard
                    Subtitle={card.Subtitle}
                    Title={card.Title}
                    Description={card.Description}
                    Text={card.Text}
                    Text2={card.Text2}
                    Button={card.Button}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
        <Grid container item>
        <Table columns={columns} rows={rows} setRows={setRows} />
        </Grid>
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
