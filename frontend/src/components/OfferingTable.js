import React from 'react'
import MUIDataTable from "mui-datatables";
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
const Footer=styled.div`
    width:100%;
    background:#fff;
`
const columns = [
 {
  name: "c_name",
  label: "Course Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "c_code",
  label: "Course Code",
  options: {
   filter: false,
   sort: true,
   display:false,
  }
 },
  {
  name: "cr_hr",
  label: "Cr.Hr",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "n_section",
  label: "Sections",
  options: {
   filter: false,
   sort: true,
  }
 },
  {
  name: "n_students",
  label: "Students",
  options: {
   filter: false,
   sort: true,
  }
 },
  {
  name: "lec",
  label: "Lecture ",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "lab",
  label: "Lab ",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "tut",
  label: "Tutorial",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "batch",
  label: "Batch Year",
  options: {
   filter: true,
   sort: true,
  }
 },
]


const StyledMUIDataTable=styled(MUIDataTable)(({theme})=>({
  background:theme.palette.background.default,

}))
export default function OfferingTable(props) {
 return(
  <StyledMUIDataTable
  title={props.title}
  data={props.data}
  columns={columns}
  options={props.option}
/>
 )} 