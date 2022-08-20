import React, { useContext } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
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

const InsideNav = styled.div`
  width: 100%;
  background-color: white;
  padding: 0px 10px;
  margin: 20px 0px 0px 0px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  font-size: 18px;
  line-height: 20;
  border-radius: 8px;
  border-bottom: 0.5px solid ${colors.third100};

  span {
    height: 100%;
  }
`;
const Clicked = css`
  border-bottom: 4px solid ${colors.primary200};
  font-weight: 400;
  color: white;
  text-decoration: none;
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

const NavUnlisted = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
  ${"" /*border-bottom: 1px solid ${colors.primary100};*/}
  padding: 10px 20px;
  align-items: center;
  a {
    text-decoration: none;
  }

  li {
    margin: 0 0.8rem;
    font-size: 1.1rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      font-weight: 600;
      border-bottom: 4px solid black;
    }
  }
`;

function Courses() {
  return (
    <CourseWrapper>
      <Router>
        <BreadCrumbs />
        <NavUnlisted>
          <NavLink
            to="/"
            className={({ isActive }) => {
              console.log(isActive);
              return isActive ? "current" : "";
            }}
            exact
          >
            <li> Course List</li>
          </NavLink>
          <NavLink
            to={"/newCourse"}
            className={({ isActive }) => {
              return isActive ? "current" : "";
            }}
          >
            <li> New Course</li>
          </NavLink>
        </NavUnlisted>
        <TableWrapper>
          <Routes>
            <Route path="/" element={<EnhancedTable />} />
            <Route path="/newCourse" element={<RegisterCourse />} />
            <Route path="/editCourse/:code" element={<EditCourse />} />
          </Routes>
        </TableWrapper>
      </Router>
    </CourseWrapper>
  );
}

export default Courses;
