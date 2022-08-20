import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import colors from "./UiComponent";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink } from "react-router-dom";
//import styled from "@emotion/styled/types/base";
import styled from "@emotion/styled";

//Importing context
import CourseContext from "./CourseContextProvider";

function createData(
  name,
  code,
  owner,
  program,
  creditHour,
  lec,
  lab,
  tut,
  adv,
  ment
) {
  return {
    name,
    code,
    owner,
    program,
    creditHour,
    lec,
    lab,
    tut,
    adv,
    ment,
  };
}

//const rows = [
//  createData(
//    "Object Oriented Programming",
//    "SWEG101",
//    "Electrical Department",
//    "Msc",
//    4,
//    4,
//    2,
//    4,
//    4,
//    2
//  ),
//  createData(
//    "System Analysis and Modeling",
//    "SWEG101",
//    "Electrical Department",
//    "Msc",
//    4,
//    2,
//    4,
//    4,
//    2,
//    4
//  ),
//  createData(
//    "Computer Architecture",
//    "SWEG101",
//    "Electrical Department",
//    "Msc",
//    4,
//    2,
//    4,
//    4,
//    2,
//    4
//  ),
//  createData(
//    "Data structures and Algorithm",
//    "SWEG101",
//    "Electrical Department",
//    "Msc",
//    4,
//    2,
//    4,
//    4,
//    2,
//    4
//  ),
//  createData(
//    "Data structures and Algorithm",
//    "SWEG101",
//    "Electrical Department",
//    "Msc",
//    4,
//    2,
//    4,
//    4,
//    2,
//    4
//  ),
//  createData(
//    "Data structures and Algorithm",
//    "SWEG101",
//    "Electrical Department",
//    "Msc",
//    4,
//    2,
//    4,
//    4,
//    2,
//    4
//  ),
//];
let rows = null;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Course Name",
  },
  {
    id: "code",
    numeric: false,
    disablePadding: false,
    label: "Code",
  },
  {
    id: "owner",
    numeric: false,
    disablePadding: false,
    label: "Owner",
  },
  {
    id: "program",
    numeric: false,
    disablePadding: false,
    label: "Program",
  },
  {
    id: "creditHour",
    numeric: true,
    disablePadding: false,
    label: "Cr Hr",
  },
  {
    id: "lec",
    numeric: true,
    disablePadding: false,
    label: "Lec",
  },
  {
    id: "lab",
    numeric: true,
    disablePadding: false,
    label: "Lab",
  },
  {
    id: "tut",
    numeric: true,
    disablePadding: false,
    label: "Tut",
  },
  {
    id: "adv",
    numeric: true,
    disablePadding: false,
    label: "Adv",
  },
  {
    id: "ment",
    numeric: true,
    disablePadding: false,
    label: "Men",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow bgColor={colors.primary400}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all courses",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: colors.third100, fontWight: 300 }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const Cont = styled.div`
    display: flex;
    width: 100%;
    ${"" /*background-color: red;*/}
    justify-content: flex-end;
    width: 100%;
    ${"" /*gap: 4px;*/}
    div {
      ${"" /*width: 100%*/}
      ${"" /*padding: 0px 10px;*/}
      &:hover {
        cursor: pointer;
      }
    }
  `;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%", justifyContent: "flex-end" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        ""
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Cont>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Cont>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  rows = React.useContext(CourseContext).state;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.courseCode);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    console.log(event.target);
    if (event.target.name === "disableBtn" || event.target.name === "editIcon")
      return;
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.courseCode);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let style = {
                    color: colors.third,
                    borderBottom: "0.5px solid",
                    borderColor: colors.third100,
                    fontFamily: "Poppins, sans Serif",
                    fontWeight: 400,
                    fontSize: "13px",
                  };
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.courseCode)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.courseCode}
                      selected={isItemSelected}
                      bgColor="white"
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="10"
                        sx={style}
                      >
                        {row.courseName}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.courseCode}
                      </TableCell>
                      <TableCell align="left" sx={style}>
                        {row.owner}
                      </TableCell>
                      <TableCell align="center" sx={style}>
                        {row.program}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.creditHour}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.lecHour}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.labHour}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.tutHour}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.advHour}
                      </TableCell>
                      <TableCell align="right" sx={style}>
                        {row.menHour}
                      </TableCell>
                      <TableCell
                        //padding="checkbox"
                        align="center"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          //justifyContent: "center",
                          height: "100%",
                          width: "100%",
                        }}
                        name="editIcon"
                      >
                        <NavLink to={`/editCourse/${row.courseCode}`}>
                          <EditIcon
                            sx={{ color: `${colors.third}` }}
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                            fontSize="small"
                            name="editIcon"
                          />
                        </NavLink>
                        <Switch defaultChecked name="disableBtn" />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ fontFamily: "Poppins, sans Serif", color: colors.third }}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
