import React from 'react';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
const DetailsBox=styled(Box)(({theme})=>({
  width: "258px",
  height: "111px",
  background: theme.palette.background.default,
  boxShadow: `0px 0px 7px ${theme.palette.background.shadow}`,
  borderRadius: "15px",
  display:'flex',
  justifyContent:'space-around',
  alignItems:'center',

}));
const IconHolder=styled(Box)(({theme})=>({
        color:theme.palette.secondary.dark,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.palette.background.icon,
        boxShadow: `0px 2px 10px ${theme.palette.background.iconShadow}`,
        borderRadius: '12px',
        width: '44px',
        height: '44px',

}));
function Details(props) {

  return (
    <DetailsBox >
      <Box>
        <Typography sx={{
          fontWeight: 600,
          fontSize: "28px",
        }}>
          { props.value}
        </Typography>
        <Typography sx={{
          fontWeight: 400,
          fontSize: "16px",
          color: 'secondary.light',
          
        }}>
        {props.text}
        </Typography>
      </Box>
      <IconHolder>
      {(() => {
          switch (props.icon) {
            case "work":
              return <BusinessCenterOutlinedIcon fontSize="small" />;
            case "teach":
              return <MenuBookOutlinedIcon fontSize="small" />;
            case "research":
              return <ScienceOutlinedIcon fontSize="small" />;
            default:
              return <BusinessCenterOutlinedIcon fontSize="small" />;
          }})()}
      </IconHolder>
        
    </DetailsBox>
  )
}
export default Details;
