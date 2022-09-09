import React from 'react'
import MUIDataTable from "mui-datatables";
import styled from '@emotion/styled';


const data = [
 ["Artificial Intelligence","12345t", "Active", "Oct 4,2021 - Dec 3, 2023","3","Internal","Addis Ababa Science and Technology University"],
 ["Side Effects of Global Warming","df2323","Active", "Oct 4,2021 - Dec 3, 2023","4","Internal","Addis Ababa Science and Technology University"],
 ["NanoTechnology","23fdfd","Pending", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the World","dfaffddf","Active", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the Africa","jhgfds","Expired", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the Ethiopia","dfaffadf","Expired", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the Addis Ababa","afadfa","Expired", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
["Artificial Intelligence","12345t", "Active", "Oct 4,2021 - Dec 3, 2023","3","Internal","Addis Ababa Science and Technology University"],
 ["Side Effects of Global Warming","df2323","Active", "Oct 4,2021 - Dec 3, 2023","4","Internal","Addis Ababa Science and Technology University"],
 ["NanoTechnology","23fdfd","Pending", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the World","dfaffddf","Active", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the Africa","jhgfds","Expired", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the Ethiopia","dfaffadf","Expired", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],
 ["Internationalization of the Addis Ababa","afadfa","Expired", "Oct 4,2021 - Dec 3, 2023", "3","Internal","Addis Ababa Science and Technology University"],

];


const StyledMUIDataTable=styled(MUIDataTable)(({theme})=>({
  background:theme.palette.background.default,
  height:'100%'
}))
export default function TeachingLoad(props) {
  const columns = [
 {
  name: "title",
  label: "Research Title",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "g_code",
  label: "Grant Code",
  options: {
   filter: false,
   sort: true,
  }
 },
  {
  name: "status",
  label: "Status",
  options: {
   filter: true,
   sort: true,
   filterList:props.state? ['Active'] : null,
  }
 },
  {
  name: "duration",
  label: "Duration",
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
  name: "type",
  label: "Type",
  options: {
   filter: true,
   sort: true,
   display:!props.state,
  }
 },
  {
  name: "institution",
  label: "Institution",
  options: {
   filter: true,
   sort: true,
   display:false,

  }
 },
]
 return(
  <StyledMUIDataTable
  title={props.title}
  data={data}
  columns={columns}
  options={props.options}
/>
 ) 
}