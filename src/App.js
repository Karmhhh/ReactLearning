import "./App.css";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Add from "@mui/icons-material/Add";
import { Table } from "./components/Table";
import {
  Grid,
  FormGroup,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function App() {
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

  const [value, setValue] = useState("");
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <Typography variant="h4" component="h4">
          To Do List Using Mui
        </Typography>
      </header>
      <main>
        <Grid container spacing={6}>
          <Grid item lg={3}></Grid>

          <Grid item lg={5}>
            <FormGroup>
              <FormControl>
                <TextField
                  name="TodosName"
                  variant="standard"
                  label="Your To Do"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                ></TextField>
                <FormHelperText>Type here your To Do.</FormHelperText>
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item lg={2}>
            <Button
              startIcon={<Add />}
              onClick={() => {
                value &&
                  setRows((current) => [
                    ...current,
                    { id: rows.length + 1, TodoName: value, completed: false },
                  ]);
              }}
              variant="outlined"
            >
              Add To Do{" "}
            </Button>
          </Grid>

          <Grid item lg={2}>
            {" "}
          </Grid>
        </Grid>

        <div
          style={{
            width: "70%",
            height: "auto",
            marginTop: "5%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Table columns={columns} rows={rows} setRows={setRows} />
        </div>
      </main>
    </>
  );
}

export default App;
