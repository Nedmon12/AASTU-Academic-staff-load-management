import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
//import colors from "./UiComponent";
import SideBarSingleBar from "./SideBarSingleBar";
import { Button } from "@mui/material";
import StaffContext from "./StaffContext";
import { useContext } from "react";
import { useTheme } from "@emotion/react";
const GroupHeader = styled("span")(({theme})=>({
  width: "100%",
  fontSize: "14px",
  textAlign: "left",
  lineHeight: "18.5px",
  color: theme.palette.primary.main,
  padding: "5px",
  fontWeight: 500,
  })
);

const NavGroup = styled.div`
  width: 100%;
  padding: 18px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

function SideBarGroup({ content }) {
 // console.log(content.header, content.children);
 const { state}= useContext(StaffContext);
  return (
    <>
      <NavGroup>
        {state.sidebar && <GroupHeader >{content[0].header}</GroupHeader>}
        {content[0].children.map((val, index) => {
          return <SideBarSingleBar key={index} content={val} />;
        })}
      </NavGroup>
    </>
  );
}

export default SideBarGroup;
