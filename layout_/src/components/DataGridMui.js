import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const Table = (props) => {
  const { columns, rows, setRows } = props;
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCompleted, setTogCom] = useState(false);

  const handleReset = () => {
    rows.map((row) => (row.completed = false));
    setRows((current) => [...current]);
  };
  useEffect(() => {}, [rows]);

  const handleDelete = () => {
    setRows(rows.filter((row) => !selectedRows.includes(row.id)));
  };

  const toggleComplet = () => {
    for (const el of selectedRows) {
      rows.map((row) => {
        row.id == el
          ? row.completed === false
            ? (row.completed = true)
            : (row.completed = false)
          : setRows((current) => [...current]);
      });
    }
  };

  return (
    <>
      <Grid
        container
        item
        xs={"auto"}
        justifyContent={"center"}
        justifyItems={"center"}
        spacing={3}
        direction={"column"}
        sx={{ width: "100%" }}
      >
        <Grid item lg={8}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(row) => row.id}
            onRowSelectionModelChange={(selectedRows) => {
              setSelectedRows(selectedRows);
            }}
          />
        </Grid>
        <Grid
          item
          justifyItems={"center"}
          justifyContent={"center"}
          container
          spacing={2}
          columnSpacing={15}
          direction={"row"}
          xs={1}
          sx={{ minWidth: '30vh' }}
        >
          <Grid item lg={4} md={4} xs={4} >
            {" "}
            <Button
              sx={{ minWidth: 50, maxWidth: 300 }}
              onClick={() => {
                handleDelete();
              }}
              variant="outlined"
              color="error"
              endIcon={<DeleteOutlineIcon />}
            >
              Delete Todos
            </Button>
          </Grid>
          <Grid item lg={4} md={4} xs={4} >
            <Button
              sx={{ minWidth: 50, maxWidth: 300 }}
              onClick={() => {
                toggleComplet();
              }}
              variant="outlined"
              color="success"
              endIcon={<CheckIcon />}
            >
              Toggle Todo
            </Button>
          </Grid>
          <Grid item lg={4} md={4} xs={4} >
            <Button
              sx={{ minWidth: 50, maxWidth: 300 }}
              onClick={() => {
                handleReset();
              }}
              variant="outlined"
              color="primary"
              endIcon={<RestartAltIcon />}
            >
              Reset Todos
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Table;
