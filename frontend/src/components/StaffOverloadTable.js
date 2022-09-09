import React, { useContext } from 'react'
import MUIDataTable from "mui-datatables";
import styled from '@emotion/styled';
import ProfileContext from './ProfileContext';



const StyledMUIDataTable=styled(MUIDataTable)(({theme})=>({
  background:theme.palette.background.default,

}))
export default function StaffOverloadTable(props) {
  const {state}=useContext(ProfileContext);
  const {calendar}=state
  const {year, semester}=calendar
  const columns = [
{
  name: "id",
  label: "ID",
  options: {
   filter: false,
   sort: true,
   display:false
  }
 },
 {
  name: "date",
  label: "Date",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "year",
  label: "Academic Year",
  options: {
   filter: true,
   sort: true,
  filterList: [year],

  }
 },
 {
   name: "semester",
   label: "Semester Term",
   options: {
     filter: true,
     sort: true,
    filterList: [semester],

     }
   },
  {
  name: "duration",
  label: "Semester Duration",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
 name: "status",
 label: "Agreement Status",
 options: {
  filter: true,
  sort: true,
  filterList: ['Unsigned'],

 }
},
]
 return(
  <StyledMUIDataTable
  title={props.title}
  data={props.data}
  columns={columns}
  options={props.option}
/>
 )} 