import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system' 
import ProfileContext from './ProfileContext'
import { useFormik } from 'formik'
import { Autocomplete, Button, Checkbox, Divider, TextField } from '@mui/material'
import OfferingTable from './OfferingTable'

const Offering=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    padding:'15px'
}))
const Header=styled(Box)(({theme})=>({
    width:'100%',
    height: '80px',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '20px',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    color:theme.palette.secondary.main
}))
const StyledForm=styled('form')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'20px',
}))
const StyledAutocomplete=styled(Box)(({theme})=>({
    display:'flex',
    gap:'20px',
}))
const Buttons=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    gap:'15px',
    margin:'10px 5px'

}))
const ToolBar=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    gap:'15px',
    margin:'10px 5px'

}))
export default function CourseOffering() {
    const submitted=false;
    const {state}=useContext(ProfileContext)
    const {calendar}=state;
    const {year,semester}=calendar;
    const [choice,setChoice]=useState({first:"",second:"",third:''})
    const handleChange=(id,value)=>{
        switch(id)
        {
            case 1: setChoice((prevChoice)=>{ return{...prevChoice , first:value!==null ? value[1]: ""}});
            break;
            case 2: setChoice((prevChoice)=>{ return{...prevChoice , second:value!==null ? value[1]: ""}});
            break;
            case 3: setChoice((prevChoice)=>{ return{...prevChoice , third: value!==null ? value[1]: ""}});
            break;
            default:
                console.log(new Error("Unexpected case"));
        }
    }
    const findName=(code)=>{
       const value=courseData.find((cr)=>{return cr[1]===code})
       return value
    } 
    const handleSubmit=()=>{
        console.log(choice)
    }
const options = {
    filterType: 'multiselect',
    selectableRows:'single',
    rowsPerPage:3,
    rowsPerPageOptions:[3,10,20,40],
    rowHover:false,
    responsive:'scroll',
    customToolbarSelect:(selectedRows, displayData, setSelectedRows) => {
            return(<ToolBar>
                    <Button variant="outlined"
                    color='secondary'
                    onClick={()=>handleChange(1,displayData[selectedRows.data[0].dataIndex].data)}
                    >First</Button>
                    <Button variant="outlined"
                    color='secondary'
                    onClick={()=>handleChange(2,displayData[selectedRows.data[0].dataIndex].data)}
                    >Second</Button>
                     <Button variant="outlined"
                    color='secondary'
                    onClick={()=>handleChange(3,displayData[selectedRows.data[0].dataIndex].data)}
                    >Third</Button>
                </ToolBar>)}
 
};
  return (
    <Offering>
        <Header>
            {`Course Offering of the ${year} Academic Year ${semester} Semester ${submitted? "has already been Submitted": ""}`}
        </Header>
        {!submitted &&
        <StyledForm onSubmit={handleSubmit}>
            <StyledAutocomplete>
            <Autocomplete
                id="first-choice"
                options={courseData}
                getOptionLabel={(option) => option[0]}
                sx={{width:'350px'}}
                value={choice.first!==""?findName(choice.first):null}
                onChange={(event,newValue)=>handleChange(1,newValue)}
                renderInput={(params) => (
                <TextField 
                {...params}
                 label="First Course Choice"
                 id="first"
                 />
                )}/>
            <Autocomplete
                id="second-choice"
                options={courseData}
                getOptionLabel={(option) => option[0]}
                sx={{width:'350px'}}
                value={choice.second!==""?findName(choice.second):null}
                onChange={(event,newValue)=>handleChange(2,newValue)}
                renderInput={(params) => (
                <TextField 
                {...params} 
                label="Second Course Choice"
                id="second"
                />
                )}/>
            <Autocomplete
                id="third-choice"
                name="third"
                options={courseData}
                getOptionLabel={(option) => option!==null?option[0]:null}
                sx={{width:'350px'}}
                value={choice.third!==""?findName(choice.third):null}
                onChange={(event,newValue)=>handleChange(3,newValue)}
                renderInput={(params) => (
                <TextField 
                {...params} 
                label="Third Course Choice"
                id="third"
                />
                )}/>
                </StyledAutocomplete>
            <Buttons>
                <Button variant="contained"
                    size="medium"
                    sx={{
                    fontWeight: 400,
                    color:'#fff',
                    bgcolor:'gray',
                    "&:hover":{
                    bgcolor:'darkGray'
                            }  }}
                    onClick={()=>setChoice({first:"",second:"",third:''})}
                    >Clear</Button>
                <Button variant="contained"
                        size="medium"
                        sx={{
                        bgcolor:'secondary.main',
                        fontWeight: 400,
                        color:'#fff',
                        "&:hover":{
                        bgcolor:'secondary.hover',}, }}
                        type="submit"
                        >Submit Choices</Button>
            </Buttons>
        </StyledForm>}
        <Divider/>
        <OfferingTable 
        data={courseData}
        option={options}
        title={`Available Courses of the ${year} Academic Year ${semester} Semester`}/>
        </Offering>
  )
}
const courseData = [
 ["Internet Programming","SWEG303", "3", "3","50", "2","2","0","4"],
 ["Object-Oriented Programming","SWEG301","4", "4","30", "2","3","0","3"],
 ["Fundamental of Programming","SWEG203","3", "4","50","2","3", "0","2"],
 ["Probablity","SWEG20y", "3", "4","50","2","4", "0","1"],
];
