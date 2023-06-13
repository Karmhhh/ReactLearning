import "./App.css";
import { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "./components/Table";

import {
  Grid,
  FormGroup,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";

function App() {
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", minWidth: 20, maxWidth: 100 },
    {
      field: "TodoName",
      headerName: "Todos Name",
      minWidth: 200,
      maxWidth: 300,
    },
    { field: "completed", headerName: "Status", minWidth: 200, maxWidth: 300 },
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
  useEffect(() => {}, [value]);
  return (
    <>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid item lg={10} md={10} sm={10} xs={12}>
          <Typography
            margin={5}
            style={{ textAlign: "center" }}
            variant="h4"
            component="h4"
          >
            To Do List Using Mui
            <Grid justifyContent={"center"} container spacing={5}>
              <Grid item lg={6} md={6} sm={6} xs={7}>
                <FormGroup>
                  <FormControl>
                    <TextField
                      name="TodosName"
                      variant="standard"
                      label="Your To Do"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    ></TextField>
                    <FormHelperText>Type here your To Do.</FormHelperText>
                  </FormControl>
                </FormGroup>
              </Grid>

              <Grid item lg={1} md={1} sm={1} xs={1}>
                <Fab
                  size="medium"
                  color="success"
                  aria-label="add"
                  onClick={() => {
                    value &&
                      setRows((current) => [
                        ...current,
                        {
                          id: rows.length + 1,
                          TodoName: value,
                          completed: false,
                        },
                      ])
                    setValue('')
                  }}
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Typography>
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={9}>
          <Table columns={columns} rows={rows} setRows={setRows} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
