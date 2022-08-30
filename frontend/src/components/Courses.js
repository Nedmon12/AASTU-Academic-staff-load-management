import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import CustomToolbar from "./CustomToolbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

//Components
import CourseContext from "./CourseContextProvider";
import EnhancedTable from "./Table";
import BreadCrumbs from "./BreadCrumbs";
import colors from "./UiComponent";
import RegisterCourse from "./RegisterCourse";
import EditCourse from "./EditCourse";
import { Avatar, Box, Button, Switch } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddCourse from "./AddCourse";

//base api url

//styled componenets
const CourseWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding: 0px 20px 20px 280px;
  font-family: Poppins;
  background-color: ${colors.primary500};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TableWrapper = styled.div`
  ${"" /*width: fit-content;*/}
  width:100%;
  background-color: ${colors.backgroundColor};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  ${"" /*padding: 0px 20px;*/};
`;
function Test({ code }) {
  return <p>{code}</p>;
}

function Courses() {
  const [expanded, setExpanded] = useState(0);
  const courseContext = useContext(CourseContext);
  useEffect(() => {
    axios("./courses").then((res) => {
      //console.log(res.data);
      courseContext.dispatch({ type: "loadCourse", course: res.data });
    });
  }, []);

  let courses = courseContext.state.map((course) => {
    let owner = course.Office ? course.Office.name : "";
    let newcourse = {
      name: { courseName: course.course_name, img: "dd.jpg" },
      code: course.course_code,
      owner: owner,
      credit_hr: course.credit_hr,
      lec: course.lecture,
      lab: course.lab,
      tut: course.tutorial,
      adv: course.advisory,
      men: course.mentoring,
      leh: course.total_leh,
      delete: course.course_code,
      disable: course.disabled,
    };
    return newcourse;
  });
  //console.log(courses);
  //const columnHead = Object.keys(courses[0]).filter(
  //  (key) => key !== "createdAt" && key !== "updatedAt" && key !== "disabled"
  //);
  const columnHead = [
    {
      label: "Course name",
      name: "name",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              style={{
                width: "100px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar>{value.img}</Avatar>
              {value.courseName}
            </div>
          );
        },
      },
    },
    {
      label: "Course code",
      name: "code",
      options: {
        filter: false,
      },
    },
    { label: "Owner", name: "owner" },
    { label: "Cr hrs", name: "credit_hr" },
    {
      label: "Lec hrs",
      name: "lec",
      options: {
        filter: false,
      },
    },
    {
      label: "Lab hrs",
      name: "lab",
      options: {
        filter: false,
      },
    },
    {
      label: "Tut hrs",
      name: "tut",
      options: {
        filter: false,
      },
    },
    {
      label: "Adv hrs",
      name: "adv",
      options: {
        filter: false,
      },
    },
    {
      label: "Ment hrs",
      name: "men",
      options: {
        filter: false,
      },
    },
    {
      label: "Load",
      name: "leh",
      options: {
        filter: false,
      },
    },
    {
      label: "Action",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              style={{ width: "100px", display: "flex", alignItems: "center" }}
            >
              <NavLink to={`/editCourse/${value}`}>
                <EditIcon color="primary" />
              </NavLink>
              {/*<NavLink to={`/deleteCourse/${value}`}>*/}
              <Switch checked={tableMeta.tableData.disabled} />
              {tableMeta.tableData.filter((row) => {
                {
                  /*if (value === row.course_code) console.log(row.indexOf(value));*/
                }
              })}
              {/*</NavLink>*/}
            </div>
          );
        },
      },
      name: "delete",
    },
  ];

  const options = {
    //filterType: "checkbox",
    //resizableColumns: true,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return <Test code={rowData[1]} />;
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <CustomToolbar
        selectedRows={selectedRows}
        displayData={displayData}
        setSelectedRows={setSelectedRows}
      />
    ),
    //count: 3,
    rowsPerPage: 3,
    rowsPerPageOptions: [3, 6, 9],
    //isRowExpandable: (dataIndex, expandedRows) => {
    //  if (expanded !== "") {
    //    if (dataIndex == expanded.toString()) {
    //      return true;
    //    }
    //    return false;
    //  }
    //  return true;
    //},
    onRowExpansionChange: (
      currentRowsExpanded,
      allRowsExpanded,
      rowsExpanded
    ) => {
      console.log(allRowsExpanded[allRowsExpanded.length - 1]?.index || "");
      if (allRowsExpanded[allRowsExpanded.length - 1]?.index) {
        setExpanded(allRowsExpanded[allRowsExpanded.length - 1].index);
      } else {
        setExpanded(null);
      }
      console.log(expanded + "sjdhsjdh");
    },
    rowsExpanded: [expanded && expanded],
  };

  return (
    <CourseWrapper>
      <Router>
        <BreadCrumbs />
        <AddCourse />
        <TableWrapper>
          <Routes>
            {/*<Route path="/" element={<EnhancedTable />} />*/}
            <Route
              path="/"
              element={
                <MUIDataTable
                  title={"Course List"}
                  data={courses}
                  columns={columnHead}
                  options={options}
                />
              }
            />

            <Route path="/addCourse" element={<RegisterCourse />} />
            <Route path="/editCourse/:code" element={<EditCourse />} />
          </Routes>
        </TableWrapper>
      </Router>
    </CourseWrapper>
  );
}

export default Courses;
