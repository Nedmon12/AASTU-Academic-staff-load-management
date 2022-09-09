import styled from '@emotion/styled'
import { Button, Divider, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik';
import React from 'react'
import * as yup from "yup";

const SecurityWrapper=styled(Box)(({theme})=>({
        display:'flex',
        height:'100%',
        padding:'25px 5px',
}))
const ChangePassword=styled('form')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    border: `0.1px solid ${theme.palette.background.shadow}`,
    width:'70%',
    height:'100%',
    borderRadius:'10px',
    padding:'0px 10px',
}))
const Header=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    padding:"15px",
    color: theme.palette.third.main,
    fontWeight: '400',
    fontSize: '15px',
}))
const StyledTextField=styled(TextField)(({theme})=>({
    marginRight:'35px',
    marginBottom:'20px',
    marginTop:'20px',
    width:'45%',
}))
const Buttons=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    gap:'15px',
    margin:'10px 35px 10px 5px'

}))
const validationSchema = yup.object({
  old: yup
    .string("Enter your Old Password")
    .required("Old Password is required"),
  new: yup
    .string("Enter your New Password")
    .required("New Password is required"),
  confirm: yup
    .string("Confirm your New Password")
    .oneOf([yup.ref["password"],null],"Passwords must match")
    .required("Confirming New Password is required"),
});

export default function Security() {
    const formik = useFormik({
    initialValues: {
      old: "",
      new: "",
      confirm: "",
    },validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <SecurityWrapper>
        <ChangePassword>
            <Header>
                ChangePassword
            </Header>
            <Divider sx={{marginBottom:'25px'}}/>
                <TextField 
                    type="password"
                    size="small" 
                    id="old" 
                    label="Old Password" 
                    error={formik.errors.old && formik.touched.old }
                    helperText={formik.touched.old && formik.errors.old}
                    value={formik.values.old}
                    onChange={formik.handleChange}
                    variant="outlined" 
                    sx={{width:'95%'}}  />
                <div
                sx={{display:'flex', flexWrap:'wrap'}}
                >
                <StyledTextField 
                    type="password"
                    size="small" 
                    id="new" 
                    label="New Password"
                    error={formik.errors.new && formik.touched.new }
                    helperText={formik.touched.new && formik.errors.new}
                    value={formik.values.new}
                    onChange={formik.handleChange}
                    variant="outlined"  />
                <StyledTextField 
                    type="password"
                    size="small" 
                    id="confirm" 
                    label="Confirm New Password" 
                    error={formik.errors.confirm && formik.touched.confirm }
                    helperText={formik.touched.confirm && formik.errors.confirm}
                    value={formik.values.confirm}
                    onChange={formik.handleChange}
                    variant="outlined"  />
                </div>
                <Buttons>
                <Button variant="contained"
                    size="medium"
                    onClick={()=>formik.resetForm()}
                    sx={{
                    fontWeight: 400,
                    color:'#fff',
                    bgcolor:'gray',
                    "&:hover":{
                    bgcolor:'darkGray'
                            }  }}
                    >Reset</Button>
                <Button variant="contained"
                    size="medium"
                    type="submit"
                    sx={{
                    bgcolor:'secondary.main',
                    fontWeight: 400,
                    color:'#fff',
                    "&:hover":{
                    bgcolor:'secondary.hover',}, }}
                    >Change Password</Button>
                    </Buttons>
        </ChangePassword>
    </SecurityWrapper>
  )
}
