import React, { useContext } from 'react'
import MUIDataTable from "mui-datatables";
import styled from '@emotion/styled';
import ProfileContext from './ProfileContext';


const data = [
 ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","II"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2022","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","II"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","II"],
 ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","I"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2021","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","I"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","I"],
  ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","II"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2022","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","II"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","II"],
 ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","I"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2021","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","I"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","I"],
  ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","II"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2022","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","II"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","II"],
 ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","I"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2021","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","I"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","I"],
  ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","II"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2022","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","II"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","II"],
 ["Internet Programming","SWEG303", "3rd", "A", "Lab","25","3","2022","I"],
 ["Object-Oriented Programming","SWEG301","3rd", "B", "Lec","50","4","2021","II"],
 ["Fundamental of Programming","SWEG203","2nd", "A","Lab","25", "3","2022","I"],
 ["Fundamental of Programming","SWEG203", "2nd", "A","Lab","25", "3","2022","I"],
 

];

const options = {
  filterType: 'multiselect',
  selectableRows:'none',
  rowsPerPage:3,
  rowsPerPageOptions:[3,10,20,40],
  rowHover:false,
  responsive:'scroll',
};
const StyledMUIDataTable=styled(MUIDataTable)(({theme})=>({
  background:theme.palette.background.default,
  height:'100%'
}))
export default function TeachingLoad() {
  const {state}=useContext(ProfileContext);
  const {calendar}=state
  const {year, semester}=calendar
  const columns = [
 {
  name: "c_name",
  label: "Course Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "c_code",
  label: "Course Code",
  options: {
   filter: true,
   sort: true,
   display:false,
  }
 },
  {
  name: "batch",
  label: "Batch",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "section",
  label: "Section",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "group_t",
  label: "Group Type",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "n_students",
  label: "Number of Students",
  options: {
   filter: true,
   sort: true,
  }
 },
  {
  name: "load",
  label: "LEH",
  options: {
   filter: true,
   sort: true,
  }
},
{
name: "a_year",
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
]
 return(
  <StyledMUIDataTable
  title={"Teaching Groups"}
  data={data}
  columns={columns}
  options={options}
/>
 ) 
}
