import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";


function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [
  createData(1, "Apple", 5, 3),
  createData(2, "Orange", 2, 2),
  createData(3, "Grapes", 3, 1),
  createData(4, "Tomato", 2, 1.6),
  createData(5, "Mango", 1.5, 4)
];

export default function SortedTable() {
  const [rowData, setRowData] = useState(rows);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [isEdit, setEdit] = React.useState(false);

  // Function For adding new row object
  const handleAdd = () => {
    setRowData([
      ...rowData,
      {
        id: rows.length + 1, firstname: "",
        lastname: "", city: ""
      },
    ]);
    setEdit(true);
  };

  const sortArray = (arr, orderBy) => {
    switch (orderBy) {
      case "asc":
      default:
        return arr.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
      case "desc":
        return arr.sort((a, b) =>
          a.price < b.price ? 1 : b.price < a.price ? -1 : 0
        );
    }
  };

  const handleSortRequest = () => {
    setRowData(sortArray(rows, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>

            <TableCell align="center">Item</TableCell>

            <TableCell align="center">Quantity&nbsp;(kg)</TableCell>

            <TableCell align="center" onClick={handleSortRequest} >
              <TableSortLabel active={true} direction={orderDirection}>
                Price&nbsp;($)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (

            <TableRow key={row.number}>
              <IconButton>
                <input
                  type={'checkbox'}
                  className={classes.healthCheckFormHtmlCheckBox}
                  value={idx}
                  onClick={(e) => {
                    setFormScore({
                      ...formScore,
                      [idx]: e.target.checked,
                    })
                  }}
                />
              </IconButton>
              <TableCell component="th" scope="row" align="center">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.item}</TableCell>
              <TableCell align="center">{row.qty}</TableCell>
              <TableCell align="center">{row.price}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
