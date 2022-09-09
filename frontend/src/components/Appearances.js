import styled from '@emotion/styled'
import { FormControlLabel, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { ColorModeContext } from '../App'
const AppearancesWrapper=styled(Box)(({theme})=>({
        display:'flex',
        height:'100%',
        padding:'25px 5px',
}))
const Customize=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    border: `0.1px solid ${theme.palette.background.shadow}`,
    width:'70%',
    height:'100%',
    borderRadius:'10px',
    padding:'20px',
}))
const Header=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    padding:"15px",
    color: theme.palette.third.main,
    fontWeight: '400',
    fontSize: '15px',
}))
export default function Appearances() {
  const {mode,colorMode}=useContext(ColorModeContext);

  return (
    <AppearancesWrapper>
        <Customize>
            <Header>Visuals</Header>
        <FormControlLabel
          control={
            <Switch checked={mode==="dark"} onChange={colorMode} name="mode" />
          }
          label="Dark Mode"
          sx={{marginLeft:'20px',
              "& label":{
                color: 'third.main'
                }
            }}
        />
        </Customize>
    </AppearancesWrapper>
  )
}
