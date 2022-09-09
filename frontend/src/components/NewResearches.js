import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { useFormik } from "formik";
import * as yup from "yup";
import shortid from 'shortid';
import { Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
const Request=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'20px',
    alignSelf:'center',
    width:'70%',
    alignItems:'center',
    borderRadius:'5px',
    // background:theme.palette.background.bread,
    boxShadow: `0px 4px 4px ${theme.palette.background.shadow}`,
    paddingBottom:'100px'
}))
const Header=styled(Box)(({theme})=>({
    width:'100%',
    height: '80px',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}))

const StyledForm=styled('form')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'40px',
    justifyContent:'flex-start',
    width:'100%',
    padding:'10px 40px',
}))

const StyledLabel=styled('label')(({theme})=>({
    color: theme.palette.third.main,
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '20px',
}))
const StyledTextField=styled(TextField)(({theme})=>({
    "& label":{
        color: theme.palette.third.main,
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '20px',
    }
    

}))

const StyledDate=styled('input')(({theme})=>({
    width: '160px',
    height: '44px',
    background:theme.palette.background.default,
    color:theme.palette.third.main,
    border:`0.2px solid ${theme.palette.third.main}`,

}))
const Duration=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'5px'
}))
const DurationWrapper=styled('fieldset')(({theme})=>({
    display:'flex',
    gap:'100px',
    border:`0.2px solid ${theme.palette.third.main}`,
    borderRadius:'5px',

}))
const MemberWrapper=styled('fieldset')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    gap:'20px',
    border:`0.2px solid ${theme.palette.third.main}`,
    borderRadius:'5px',

}))
const Member=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-evenly',
    width:'100%',
    border:`0.2px solid ${theme.palette.third.main}`,
    borderRadius:'6px'

}))
const Buttons=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    gap:'15px',
    margin:'10px 5px'

}))

const validationSchema = yup.object({
  title: yup
    .string("Enter the Research Title")
    .required("Research Title is required"),
  gcode: yup
    .string("Enter the Research Grant Code")
    .required("Grant Code is required"),
  type: yup
    .string("Choose the Research Type")
    .required("Research Type is required")
    .oneOf(['Internal', 'External'],"Not a valid type of research"),
  institution: yup
    .string("Choose the Research Institution")
    .required("Research Institution is required"),
  startDate: yup
    .date("Enter the Starting Date")
    .required("Starting Date is required"),
   endDate: yup
    .date("Enter the End Date")
    .required("End Date is required"),
  description: yup
    .string("Enter a Description for the Research")
    .required("Research Description is required"),
 role: yup
    .string("Choose your role in the Research")
    .required("Research Role is required")
    .oneOf(['PI', 'Co PI', 'Member'],"Not a valid type of role"),
  load: yup.number("Enter the LEH for the Research")
            .required("Research Expected Load is required")
  ,
  member: yup.array("Enter the email and role of staff involved in research"),
});
export default function NewResearches() {
const [members,setMembers]=useState([]);
const AddMembers=(event)=>{
    event.preventDefault();
    setMembers(prevMembers=>[...prevMembers,{
        key:shortid.generate(),
        email:'',
        role:'',
    }])
}
const RemoveMember=(event,key)=>{
    event.preventDefault();
    
    setMembers(prevMembers=>
        prevMembers.filter((mem)=>mem.key!==key)
        )
}
const EditMemberEmail=(event)=>{
    setMembers(prevMembers=>
        prevMembers.map((mem)=>mem.key===event.target.id ?{...mem,email:event.target.value}: mem)
        )

}
const EditMemberRole=(event)=>{
    setMembers(prevMembers=>
        prevMembers.map((mem)=>mem.key===event.target.name ? {...mem,role:event.target.value} : mem)
        )
}
const formik = useFormik({
    initialValues: {
      title: "",
      gcode: "",
      type: "",
      institution:"",
      startDate: "",
      endDate: "",
      description: "",
      role: "",
      load: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Request>
    <Header>
        Research Grant Request
    </Header>
        <StyledForm onSubmit={formik.handleSubmit}>
        <StyledTextField
          fullWidth
          id="title"
          label="Research Title"
          variant="standard"
          error={formik.errors.title && formik.touched.title }
          helperText={formik.touched.title && formik.errors.title}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <StyledTextField
          fullWidth
          error={formik.errors.gcode && formik.touched.gcode}
          id="gcode"
          label="Grand Code"
          helperText={formik.touched.gcode && formik.errors.gcode}
          variant="standard"
          value={formik.values.gcode}
          onChange={formik.handleChange}
        />
        <div>
        <StyledLabel>
            Research Type
        </StyledLabel>
        <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="type"
            id="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.errors.type && formik.touched.type? formik.error.type:''}
        >
            <FormControlLabel value="Internal" control={<Radio color='secondary' />} label="Internal" />
            <FormControlLabel value="External" control={<Radio color='secondary'/>} label="External" />
        </RadioGroup>
        </div>
        <StyledTextField
          fullWidth
          disabled={formik.values.type==="External" ? false : true}
          error={formik.errors.institution && formik.touched.institution}
          id="institution"
          label="Institution Name"
          helperText={formik.touched.institution && formik.errors.institution}
          variant="standard"
          value={formik.values.type==="External"||formik.values.type===""?formik.values.institution: "Addis Ababa Science and Technology University"}
          onChange={formik.handleChange}
        />
        <DurationWrapper>
            <legend> 
            <StyledLabel>Duration</StyledLabel>
            </legend>
        <Duration>
         <StyledLabel>
            Starting Date
        </StyledLabel>
        <StyledDate 
        type="Date"
        name='Starting Date'
        error={formik.errors.startDate && formik.touched.startDate}
        id="startDate"
        helperText={formik.touched.startDate && formik.errors.startDate}
        selected={formik.values.startDate}
        onChange={formik.handleChange}
        />
        </Duration>
         <Duration>
         <StyledLabel>
            Expiration Date
        </StyledLabel>
        <StyledDate 
        type="Date"
        name='Expiration Date'
        error={formik.errors.endDate && formik.touched.endDate}
        id="endDate"
        helperText={formik.touched.endDate && formik.errors.endDate}
        selected={formik.values.endDate}
        onChange={formik.handleChange}
        />
        </Duration>
        </DurationWrapper>

         <StyledTextField
          fullWidth
          error={formik.errors.description && formik.touched.description}
          id="description"
          label="Research Description"
          multiline
          rows={4}
          helperText={formik.touched.description && formik.errors.description}
          variant="standard"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
         <div>
        <StyledLabel>
            Role
        </StyledLabel>
        <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="role"
            id="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.errors.role && formik.touched.role? formik.error.role:''}
        >
            <FormControlLabel value="PI" control={<Radio color='secondary' />} label="PI" />
            <FormControlLabel value="Co PI" control={<Radio color='secondary'/>} label="Co Pi" />
            <FormControlLabel value="Member" control={<Radio color='secondary'/>} label="Member" />
        </RadioGroup>
        </div>
        <StyledTextField
          fullWidth
          type="number"
          error={formik.errors.load && formik.touched.load}
          id="load"
          label="Expected LEH"
          helperText={formik.touched.load && formik.errors.load}
          variant="standard"
          value={formik.values.load}
          onChange={formik.handleChange}
        />
        <Duration>
        <StyledLabel>
            Contract Agreement
        </StyledLabel>
           <Button variant="contained" component="label" sx={{
            width:'180px',
            bgcolor:'third.main',
            "& : hover":{
              bgcolor:'gray',
             }  
           }}>
            Choose File
            <input hidden accept="document/*" multiple type="file" />
            </Button>
        </Duration>
        <MemberWrapper >
            <legend>
            <StyledLabel>Members</StyledLabel>
            </legend>
            {
                members.map((mem,index)=>
                <Member key={index} >
                    <StyledTextField
                    type="email"
                    required
                    id={mem.key}
                    label="Email"
                    variant="standard"
                    value={mem.value}
                    onChange={EditMemberEmail}
                    sx={{
                        marginBottom:"15px",
                    }}
                    />
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name={mem.key}
                            value={mem.role}
                            onChange={EditMemberRole}
                            required
                        >
                            <FormControlLabel name={mem.key} value="PI" control={<Radio color='secondary' />} label="PI" />
                            <FormControlLabel name={mem.key} value="Co PI" control={<Radio color='secondary'/>} label="Co Pi" />
                            <FormControlLabel name={mem.key} value="Member" control={<Radio color='secondary'/>} label="Member" />
                        </RadioGroup>
                        <Button id={mem.key} onClick={(event)=>RemoveMember(event,mem.key)}>
                            <DeleteIcon color='secondary'/>
                        </Button>
                </Member>
                )
            }
            <Button variant="outlined" 
                     color="secondary"
                     startIcon={<AddCircleOutlineRoundedIcon color="secondary"/>}
                     onClick={AddMembers}
                    >
                Invite Member
            </Button>
        </MemberWrapper>
     

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
                    >Cancel</Button>
    <Button variant="contained"
        size="medium"
        sx={{
          bgcolor:'secondary.main',
          fontWeight: 400,
          color:'#fff',
          "&:hover":{
          bgcolor:'secondary.hover',}, }}
        >Submit Request</Button>
        </Buttons>
        </StyledForm>

    </Request>
  )
}
