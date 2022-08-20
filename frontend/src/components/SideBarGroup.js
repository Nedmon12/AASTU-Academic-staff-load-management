import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import colors from "./UiComponent";
import SideBarSingleBar from "./SideBarSingleBar";
import { Button } from "@mui/material";

const GroupHeader = styled.span`
  width: 100%;
  font-size: 14px;
  text-align: left;
  line-height: 18.5px;
  color: ${colors.primary};
  padding: 5px;
  font-weight: 500;
`;

const NavGroup = styled.div`
  width: 100%;
  padding: 18px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  border-bottom: 0.5px solid ${colors.third100};
`;

function SideBarGroup({ content }) {
  console.log(content.header, content.childs);
  return (
    <>
      <NavGroup>
        <GroupHeader>{content[0].header}</GroupHeader>
        {content[0].childs.map((val, index) => {
          return <SideBarSingleBar key={index} content={val} />;
        })}
      </NavGroup>
      <NavGroup>
        <GroupHeader>{content[1].header}</GroupHeader>
        {content[1].childs.map((val, index) => {
          return <SideBarSingleBar key={index} content={val} />;
        })}
      </NavGroup>
    </>
  );
}

export default SideBarGroup;
