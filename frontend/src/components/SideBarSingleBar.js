import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useTheme } from "@emotion/react";
import {
  ScienceOutlined,
  AssignmentIndOutlined,
  PersonOutlined,
  MenuBookOutlined,
  AppsOutlined,
  HomeOutlined,
  SettingsOutlined,
  ListOutlined
} from "@mui/icons-material";
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

import { Link } from "react-router-dom";
import StaffContext from "./StaffContext";
import { useContext } from "react";
import { Badge } from "@mui/material";
const Nav = styled(Link)`
  display: flex;
  gap: 10px;
  width: 100%;
  font-size: 14px;
  text-align: left;
  line-height: 18.5px;
  color: ${props=>props.palette.third.main};
  padding: 15px 16px;
  align-items: center;
  font-weight: 400;
  text-decoration:none;
  ${"" /*border: 1px solid black;*/}
  border-radius: 8px;
  transition: 0.4s ease-out;
  &:hover {
    color: ${props=>props.theme.palette.light};
    background-color: ${props=>props.palette.primary.superLight};
    cursor: pointer;
    font-weight: 500;
  }
`;
const StyledBatch=styled(Badge)(({theme})=>({

}))
function SideBarSingleBar({ content }) {
  // console.log(content);
 const theme=useTheme();
 const { state}= useContext(StaffContext);
 const {research_notf,overload_notf,offering_notf}=state
  return (
    <>
      <Nav to={content.link} palette={theme.palette}>

        {(() => {
          switch (content.icon) {
            case "home":
              return <HomeOutlined fontSize="small" />;
            case "science":
              return <Badge badgeContent={research_notf} 
                      color="secondary"
                      sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }} >
                        <ScienceOutlined fontSize="small" />
                                </Badge>

            case "Person":
              return <PersonOutlined fontSize="small" />;
            case "menu-book":
              return <MenuBookOutlined fontSize="small" />;
            case "assignment_ind":
              return <AssignmentIndOutlined fontSize="small" />;
            case "overload":
              return <Badge badgeContent={overload_notf} 
                      color="secondary"
                      sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      >
                          <ReportGmailerrorredOutlinedIcon fontSize="small"/>             
                      </Badge>
            case "offering":
              return <Badge badgeContent={offering_notf} 
                      color="secondary"
                      sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      >
                    <ListOutlined fontSize="small"/>
                      </Badge>
            case "setting":
              return <SettingsOutlined fontSize="small"/>;
            default:
              return <AppsOutlined fontSize="small" />;
          }
        })()}
        {state.sidebar && content.name}

      </Nav>
    </>
  );
}

export default SideBarSingleBar;
