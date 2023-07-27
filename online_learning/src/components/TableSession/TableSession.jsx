import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "styled-components";

const columns = [
  //   { id: 'name', label: 'Name', minWidth: 170 },
  //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  //   {
  //     id: 'population',
  //     label: 'Population',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'size',
  //     label: 'Size\u00a0(km\u00b2)',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'density',
  //     label: 'Density',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toFixed(2),
  //   },
  {
    id: "date",
    label: "Date",
    align: "center",
  },
  {
    id: "class",
    label: "Class",
    align: "center",
  },
  {
    id: "tutor",
    label: "Tutor",
    align: "center",
  },
  {
    id: "topic",
    label: "Topic",
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    align: "center",
  },
  {
    id: "video",
    label: "Video",
    align: "center",
  },
  {
    id: "flie",
    label: "File",
    align: "center",
  },
  {
    id: "assignment",
    label: "Assignment",
    align: "center",
  },
];

const fakeData = [
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },

  {
    date: "a",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "aádasd",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "avsw",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
  {
    date: "ãzcas",
    class: "123",
    tutor: "123",
    topic: "234",
    status: "abc",
    video: "zxc",
    file: "ax",
    assignment: "12314",
  },
];

const TableStyle = styled.div`
  .css-jtlhu6-MuiTablePagination-root {
    float: left;
  }
  .messages-menu p {
    display: none;
  }
  .MuiTablePagination-actions {
    display: none;
  }
`;

const TableSession = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableStyle>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={fakeData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {fakeData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </TableStyle>
  );
};
export default TableSession;
