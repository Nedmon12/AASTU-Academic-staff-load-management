import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Autocomplete, Button, Chip, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import ActiveResearch from './ActiveResearch'
import ResearchDetail from './ResearchDetails';
const Research=styled(Box)(({theme})=>({
  display:'flex',
  flexDirection:'column',
}))
const ToolBar=styled(Box)(({theme})=>({
  background:theme.palette.background.default,
  width:'100%',
  display:'flex',
  justifyContent:'flex-end',
  borderBottom: `1px solid ${theme.palette.background.paper}`,
  padding:'10px',
  gap:'15px'
}))
const Search=styled(Autocomplete)(({theme})=>({
  width: '300px',
  margin: 0,
  padding: 0,

}))
const filterOptions = ['Active', 'Pending', 'Expired'];

export default function Researches() {
 const navigate=useNavigate();
  const [search,setSearch]=useState('');
  const [filter, setFilter] = React.useState(['Active', 'Pending', 'Expired']);
  const RequestResearch=()=>{
 navigate('/researches/new_researches')
}
  const researchOptions = {
  filterType: 'multiselect',
  selectableRows:"none",
  expandableRows:true,
  renderExpandableRow:(rowData, rowMeta) =>{
    return (<ResearchDetail rowData={rowData} rowMeta={rowMeta} sx={{width:'100%'}}/>)},
  rowsPerPage:6,
  rowsPerPageOptions:[6,10,20,40],
  rowHover:false,
  responsive:'scroll',
};
  return (
    <Research>
      <ToolBar>
        <Button variant="contained"
        size="small"
        sx={{
          bgcolor:'secondary.main',
          fontWeight: 400,
          color:'#fff',
          "&:hover":{
          bgcolor:'secondary.hover',
          }
          }}
        onClick={RequestResearch}
        >Request Research</Button>
      </ToolBar>
      <ActiveResearch options={researchOptions} title="Researches" state={false}/>
    </Research>
  )
}
