import styled from '@emotion/styled';
import React, {useContext, useState} from 'react';

import { Box } from '@mui/system';
import Details from './details';
import ProfileContext from './ProfileContext';
import TeachingLoad from './TeachingLoad';
import ActiveResearch from './ActiveResearch'
import { Tab, Tabs } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate();
  const DetailWrapper=styled(Box)(({theme})=>({
    display:"flex",
    flexWrap:'wrap',
    gap:"33px",
    margin:"20px",
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    paddingBottom:'44px',
    borderRadius:'2px',
  }))
  const InfoWrapper=styled(Box)({
    width:'100%',
    marginLeft:'10px',
    display:'flex',
    flexDirection:'column',
    gap:'10px',

  })
  const {state}=useContext(ProfileContext);
  const details=state.details
  const [table,setTable]=useState(window.location.pathname==='/'?"load":"research")
  const HandleChange = (event, newValue) => {
    setTable(newValue);
    console.log(newValue)
    navigate(newValue==='load'?'/':'/a_research');
  };
  const researchOptions = {
  filterType: 'multiselect',
  selectableRows:"none",
  rowsPerPage:3,
  rowsPerPageOptions:[3,10,20,40],
  rowHover:false,
  responsive:'scroll',
};
  return (
    <>
    <DetailWrapper>
      <Details value={details.load} text="Total WorkLoad" icon='work'/>
      <Details value={details.n_groups} text="Teaching Group Loads" icon='teach'/>
      <Details value={details.a_research} text="Active Researches" icon='research'/>
    </DetailWrapper>
    <InfoWrapper>
      <Tabs
          value={table}
          onChange={HandleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
          }}
        >
          <Tab value="load" label="Teaching Load" />
          <Tab value="research" label="Researches" />
        </Tabs>
       <Routes>
        <Route exact path="/" element={ <TeachingLoad />} />
        <Route exact path="/a_research" element={<ActiveResearch options={researchOptions} 
        title="Active Researches" state={true} id={false}/> } />
      </Routes>  
    </InfoWrapper>
  
    
    </>
  )
}
