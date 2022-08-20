import React from "react";
import styled from "@emotion/styled";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Home } from "@mui/icons-material";
import colors from "./UiComponent";
const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    href="/"
    onClick={() => {
      console.log("clicked home");
    }}
  >
    <Home fontSize="small" />
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={() => {
      console.log("clicked course");
    }}
    fontSize="14px"
  >
    Course Managment
  </Link>,
  <Typography key="3" color="text.primary" fontSize={14}>
    Courses List
  </Typography>,
];

const BreadcrumbsWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 10px;
  margin: 20px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  border: 0.5px solid ${colors.primary100};
  border-radius: 8px;
`;
function BreadCrumbs() {
  return (
    <BreadcrumbsWrapper>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </BreadcrumbsWrapper>
  );
}

export default BreadCrumbs;
