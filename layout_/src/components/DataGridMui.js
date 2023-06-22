import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const Table = (props) => {
  const { columns, rows, setRows } = props;
  const [selectedRows, setSelectedRows] = useState([]);

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
        return row.id === el
          ? row.completed === false
            ? (row.completed = true)
            : (row.completed = false)
          : setRows((current) => [...current]);
      });
    }
  };

  return (
    <>
      <Stack direction={"column"} spacing={4}>
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
        <Stack justifyContent={"space-between"} spacing={2} direction={"row"}>
          <Button 
            sx={{ minWidth: 50, maxWidth: 300 } }
            onClick={() => {
              handleDelete();
            }}
            variant="contained"
            color="error"
            endIcon={<DeleteOutlineIcon />}
          > 
            Delete Todos
          </Button>

          <Button
            sx={{ minWidth: 50, maxWidth: 300 }}
            onClick={() => {
              toggleComplet();
            }}
            variant="contained"
            color="success"
            endIcon={<CheckIcon />}
          >
            Toggle Todo
          </Button>
          
          <Button
            sx={{ minWidth: 50, maxWidth: 300 }}
            onClick={() => {
              handleReset();
            }}
            variant='contained'
            color="warning"
            endIcon={<RestartAltIcon />}
          >
            Reset Todos
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Table;
