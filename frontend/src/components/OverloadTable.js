import React from 'react'
import MUIDataTable from "mui-datatables";
import styled from '@emotion/styled';
import { Box } from '@mui/system';

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
   filter: false,
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
   filter: false,
   sort: true,
  }
 },
  {
  name: "lab",
  label: "Lab ",
  options: {
   filter: false,
   sort: true,
  }
 },
  {
  name: "tut",
  label: "Tutorial",
  options: {
   filter: false,
   sort: true,
  }
 },
  {
  name: "tot",
  label: "Total",
  options: {
   filter: false,
   sort: true,
  }
 },
]

const data = [
 ["Internet Programming","SWEG303", "3", "3","50", "2","2","0","4"],
 ["Object-Oriented Programming","SWEG301","4", "4","30", "2","3","0","5"],
 ["Fundamental of Programming","SWEG203","3", "4","50","2","3", "0","5"],
 ["Fundamental of Programming","SWEG203", "3", "4","50","2","4", "0","6"],
 

];


const StyledMUIDataTable=styled(MUIDataTable)(({theme})=>({
  background:theme.palette.background.default,
  height:'100%',
  marginBottom: '30px',
}))
export default function OverloadTable(props) {
 return(
  <StyledMUIDataTable
  title={props.title}
  data={data}
  columns={columns}
  options={props.options}
/>
 )} 