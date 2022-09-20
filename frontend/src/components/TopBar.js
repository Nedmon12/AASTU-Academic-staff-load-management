import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SettingOutlined from "@mui/icons-material/SettingsOutlined";
import colors from "./UiComponent";

//let primary = "#111847";
//let secondary = "#A37C0C";
//let third = "#9B9B9B";
//let backgroundColor = "lightgray";
//creating the header
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  width: 100%;
  background-color: ${colors.backgroundColor};
  color: ${colors.primary};
  font-family: "Poppins", sans-serif;
  position: sticky;
  top: 0;
  left: 0;
  ${"" /*z-index: 3;*/}
`;

const ImgContainer = styled.div`
  padding: 5px 10px;
  background-color: ${colors.primary500};
  display: flex;
  border-radius: 30px;
  align-items: center;
  width: fit-content;
  gap: 15px;
  color: ${colors.primary300};
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

function TopBar() {
  return (
    <Header>
      <LogoContainer>
        <Avatar src="/images/aastulogo.png" sx={{ width: 32, height: 32 }} />
        <span>ALMS</span>
      </LogoContainer>
      <ImgContainer>
        <Avatar src="/images/photo.png" sx={{ width: 32, height: 32 }} />
        <SettingOutlined />
      </ImgContainer>
    </Header>
  );
}

export default TopBar;
