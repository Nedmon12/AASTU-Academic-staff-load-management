import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
//import colors from "./UiComponent";
import SideBarGroup from "./SideBarGroup";
import StaffContext from "./StaffContext";
import { useContext } from "react";
import { useTheme } from "@emotion/react";
const SideBarWrapper = styled.span`
  position: sticky;
  top:0;
  left:0;
  width: ${props=>props.width};
  height: 100vh;
  background-color: ${props=>props.palette.background.default};
  color: ${props=>props.palette.third.main};
  padding: 16px 16px 16px 5px;
  box-shadow: 0px 4px 6px ${props=>props.palette.background.shadow};
  border-radius: 0px 10px 10px 0px;
  display:flex;
  flex-direction:column;
  gap:20px;
`;
const LogoContainer = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor:pointer;
  span {
    font-size: 34px;
    font-weight: 600;
  }
  margin-left:10px;
  padding-bottom:40px;
  border-bottom: 0.5px solid ${props=>props.palette.third.light};
`;
function SideBar() {
const theme=useTheme();
const { state,dispatch}= useContext(StaffContext);
const width= state.sidebar? "240px": "60px"


  return (
      <SideBarWrapper width={width} palette={theme.palette}>
        <LogoContainer onClick={()=>{dispatch({type:"collapse_expand"})}} palette={theme.palette}>
        <Avatar src="/images/aastulogo.png" sx={{ width: 32, height: 32 }} />
        {state.sidebar && <span>ALMS</span>}
      </LogoContainer>
        <SideBarGroup
          content={[
            {
              header: "Dashboard",
              children: [
                { icon: "home", link: "/", name: "Home" },
                { icon: "science", link: "/researches", name: "Research" },
                { icon: "overload", link: "/staff_overload", name: "Staff Overload" },
                { icon: "offering", link: "/offering", name: "Course Offering" },
                { icon: "setting", link: "/setting", name: "Settings" },
              ],
            },
          ]}
        />
      </SideBarWrapper>
  );
}

export default SideBar;
