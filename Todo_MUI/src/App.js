import "./App.css";
import { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "./components/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
  const DeleteTodo = (props) => {
    const handleDelete = () => {
      alert(props.row.TodoName);
      setRows(rows.filter((row) => row.id !== props.row.id));
    };
    return (
      <>
        <Button
          color="error"
          size="small"
          aria-label="add"
          onClick={handleDelete}
        >
          <DeleteOutlineIcon />
        </Button>
      </>
    );
  };
  const EditTodo = (props) => {
    const [open, setOpen] = useState(false);
    const [valueEdit, setValueEdit] = useState("");

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <strong>
        <Button
          color="primary"
          size="small"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <EditIcon />
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Todo '{props.row.TodoName}'</DialogTitle>
          <DialogContent>
            <DialogContentText>Name your Todo here.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Todo Name"
              onChange={(e) => {
                setValueEdit(e.target.value);
              }}
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                props.row.TodoName = valueEdit;
                handleClose();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </strong>
    );
  };

  const [columns, setColumns] = useState([
    // { field: "id", headerName: "ID", minWidth: 20 },
    {
      field: "TodoName",
      headerName: "Todos Name",
      flex: 1,
      align: "left",
    },
    {
      field: "completed",
      headerName: "Status",
      flex: 1,
      align: "left",
    },

    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: EditTodo,
    },
    {
      field: "delete",
      headerName: "Delete Todo",
      flex: 1,
      renderCell: DeleteTodo,
    },
  ]);

  const [rows, setRows] = useState([
    { id: 1, TodoName: "Study", completed: "🔴" },
    { id: 2, TodoName: "Eat", completed: "🔴" },
    { id: 3, TodoName: "Sleep", completed: "🔴" },
    { id: 4, TodoName: "Drink", completed: "🔴" },
    { id: 5, TodoName: "Walk", completed: "🔴" },
    { id: 6, TodoName: "Hit Gym", completed: "🔴" },
    { id: 7, TodoName: "Go work", completed: "🔴" },
    { id: 8, TodoName: "Dance", completed: "🔴" },
    { id: 9, TodoName: "Talk", completed: "🔴" },
  ]);

  const [value, setValue] = useState("");
  useEffect(() => {}, []);
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
                          id: "ID_" + value,
                          TodoName: value,
                          completed: "🔴",
                        },
                      ]);
                    setValue("");
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
