import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Security from './Security';
import Appearances from './Appearances';
const SettingsWrapper=styled(Box)(({theme})=>({
   boxShadow: `0px 0px 7px ${theme.palette.background.shadow}`,
   width:'95%',
   height:'100%',
   margin:'20px 40px',
   borderRadius:'10px',
   display:'flex',
   alignSelf:'center',
   flexDirection:'column',
   padding:'10px 20px',
}))
export default function Setting() {
  const navigate=useNavigate();
  const [table,setTable]=useState(window.location.pathname)
  const HandleChange = (event, newValue) => {
    setTable(newValue);
    navigate(newValue);}
  return (
    <SettingsWrapper>
    <Tabs
          value={table}
          onChange={HandleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
          }}
        >
          <Tab value="/setting" label=" Profile" />
          <Tab value="/setting/security" label="Security" />
          <Tab value="/setting/appearances" label="Appearances" />
        </Tabs>
        {
          table==="/setting" && <Profile/>
        }
        {
          table==="/setting/security" && <Security/>
        }
        {
          table==="/setting/appearances" && <Appearances/>
        }
    </SettingsWrapper>
  )
}
