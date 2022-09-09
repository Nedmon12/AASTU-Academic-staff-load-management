import React from 'react'
import { Box } from '@mui/system'
import styled from '@emotion/styled' 
import { Avatar, TextField } from '@mui/material'
import { useFormik } from "formik";
import * as yup from "yup";
const StyledForm=styled("form")(({theme})=>({
  
}))
const BackGround=styled(Box)(({theme})=>({
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   padding:'30px',
   height:'100vh',
   width:'100vw',  
   background:theme.palette.secondary.lighter,
}))
const SignInCard=styled(Box)(({theme})=>({
    width:'450px',
    height:'600px',
    background:theme.palette.background.default,
    boxShadow: `0px 0px 7px ${theme.palette.background.shadow}`,
    borderRadius:'10px',
    padding:'10px',
}))
const LogoContainer = styled('span')(({theme})=>({
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent:'center',
    cursor:'pointer',
    span: {
        fontSize: '34px',
        fontWeight: '600',
    },
    marginLeft:'10px',
    paddingBottom:'40px',
    borderBottom: `0.5px solid ${theme.palette.third.light}`,
}))

export default function SignIn() {
const validationSchema = yup.object({
  email: yup.string()
    .email("Enter the correct Email")
    .required("Email is required"),

});
const formik = useFormik({
    initialValues: {
      email:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    },
  });
  return (
    <BackGround>
        <SignInCard>
             <LogoContainer >
                <Avatar src="/images/aastulogo.png" sx={{ width: 40, height: 40 }} />
                <span>ALMS</span>
            </LogoContainer>
            <StyledForm>
               <TextField
                fullWidth
                type="email"
                label="Email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </StyledForm>
    
        </SignInCard>
    </BackGround>
  )
}
