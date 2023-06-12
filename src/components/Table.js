import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
export const Table = (props) => {
  const { columns, rows, setRows } = props;
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCompleted, setTogCom] = useState(false);

  const handleReset = () => {
    rows.map((row) => (row.completed = false));
    setRows(current=>[...current])
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

  console.log("rows2", rows);
  return (
    <>
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
      <Button
        onClick={() => {
          handleDelete();
        }}
        variant="outlined"
        color="error"
      >
        Delete Selected Todos
      </Button>

      <Button
        onClick={() => {
          toggleComplet();
        }}
        variant="outlined"
        color="success"
      >
        Toggle Todo
      </Button>
      <Button
        onClick={() => {
          handleReset();
        }}
        variant="outlined"
        color="primary"
      >
        Reset Todos
      </Button>
    </>
  );
};
