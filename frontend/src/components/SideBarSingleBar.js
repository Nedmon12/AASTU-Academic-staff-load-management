import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import colors from "./UiComponent";
import {
  ScienceOutlined,
  AssignmentIndOutlined,
  PersonOutlined,
  MenuBookOutlined,
  AppsOutlined,
  HomeOutlined,
} from "@mui/icons-material";

const Nav = styled.span`
  display: flex;
  gap: 10px;
  width: 100%;
  font-size: 14px;
  text-align: left;
  line-height: 18.5px;
  color: ${colors.third};
  padding: 15px 16px;
  align-items: center;
  font-weight: 400;
  ${"" /*border: 1px solid black;*/}
  border-radius: 8px;
  transition: 0.4s ease-out;
  &:hover {
    color: ${colors.primary400};
    background-color: ${colors.primary100};
    cursor: pointer;
    font-weight: 500;
  }
`;

function SideBarSingleBar({ content }) {
  console.log(content);

  return (
    <>
      <Nav>
        {(() => {
          switch (content.icon) {
            case "home":
              return <HomeOutlined fontSize="small" />;
            case "science":
              return <ScienceOutlined fontSize="small" />;
            case "Person":
              return <PersonOutlined fontSize="small" />;
            case "menu-book":
              return <MenuBookOutlined fontSize="small" />;
            case "assignment_ind":
              return <AssignmentIndOutlined fontSize="small" />;

            default:
              return <AppsOutlined fontSize="small" />;
          }
        })()}
        {content.name}
      </Nav>
    </>
  );
}

export default SideBarSingleBar;
