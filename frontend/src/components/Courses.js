import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

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
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

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

function Courses() {
  const courseContext = useContext(CourseContext);
  useEffect(() => {
    axios("./courses").then((res) =>
      courseContext.dispatch({ type: "loadCourse", course: res.data })
    );
  }, []);

  let courses = courseContext.state.map((course) => {
    let newcourse = [
      course.course_name,
      course.course_code,
      course.owner,
      course.credit_hr,
      course.lecture,
      course.lab,
      course.tutorial,
      course.advisory,
      course.mentoring,
      course.total_leh,
      course.course_code,
    ];
    return newcourse;
  });
  console.log(courses);
  //const columnHead = Object.keys(courses[0]).filter(
  //  (key) => key !== "createdAt" && key !== "updatedAt" && key !== "disabled"
  //);
  const columnHead = [
    { name: "Course name" },
    { name: "Course code" },
    { name: "Owner" },
    { name: "Cr hrs" },
    { name: "Lec hrs" },
    { name: "Lab hrs" },
    { name: "Tut hrs" },
    { name: "Adv hrs" },
    { name: "Ment hrs" },
    { name: "Load" },
    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <NavLink to={`/editCourse/${value}`}>
                <EditIcon />
              </NavLink>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    resizableColumns: true,
  };
  return (
    <CourseWrapper>
      <Router>
        <BreadCrumbs />
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
