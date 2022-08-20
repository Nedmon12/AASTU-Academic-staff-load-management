import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import colors from "./UiComponent";
import SideBarGroup from "./SideBarGroup";

const SideBarWrapper = styled.div`
  position: fixed;
  width: 260px;
  height: 100vh;
  background-color: ${colors.backgroundColor};
  color: ${colors.third};
  padding: 16px 16px 16px 16px;
`;

function SideBar() {
  return (
    <>
      <SideBarWrapper>
        <SideBarGroup
          content={[
            {
              header: "Dashboard",
              childs: [
                { icon: "home", link: "Home", name: "Home" },
                { icon: "menu-book", link: "Course", name: "Course Managment" },
                { icon: "science", link: "Course", name: "Research Managment" },
                { icon: "Person", link: "Course", name: "Staff Managment" },
                {
                  icon: "event_seat",
                  link: "Course",
                  name: "Section Managment",
                },
                {
                  icon: "assignment_ind",
                  link: "Course",
                  name: "Course Assignment",
                },
              ],
            },
            {
              header: "Reports",
              childs: [
                { icon: "menu-book", link: "Home", name: "Course" },
                { icon: "Person", link: "Course", name: "Staff" },
                { icon: "science", link: "Course", name: "Semester" },
              ],
            },
          ]}
        />
      </SideBarWrapper>
    </>
  );
}

export default SideBar;
