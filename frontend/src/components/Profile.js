import styled from '@emotion/styled'
import { Autocomplete, Avatar, Button, Divider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import ProfileContext from './ProfileContext'
import * as yup from "yup";

const ProfileWrapper=styled(Box)(({theme})=>({
    display:'flex',
    height:'100%',
    padding:'25px 5px',
    gap:'25px'
}))
const ProfilePic=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    border: `0.1px solid ${theme.palette.background.shadow}`,
    width:'35%',
    height:'55%',
    borderRadius:'10px',
}))
const ProfileDetail=styled('form')(({theme})=>({
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
const ImageContainer=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'10px',
    justifyContent:'center',
}))
const NameTextField=styled(TextField)(({theme})=>({
    marginRight:'15px',
    marginBottom:'30px',
    width:'30%',
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
  first_name: yup
    .string("Enter your First Name")
    .required("First Name is required"),
 middle_name: yup
    .string("Enter your Middle Name")
    .required("Middle Name is required"),
 last_name: yup
    .string("Enter your Last Name")
    .required("Last Name is required"),
email: yup
    .string("Enter your email")
    .email("Enter proper email")
    .required("Email is required"),
mobile: yup
    .string("Enter your Phone Number")
    .required("Phone Number is required")
,rank: yup
    .string("Enter your Academic Rank")
    .required("Academic Rank is required"),
});
export default function Profile() {
    const {state, dispatch}=useContext(ProfileContext);
    const {pic,name,  first_name, middle_name,last_name,email,rank,mobile}=state;
    const formik = useFormik({
    initialValues: {
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      email:email,
      mobile: mobile,
      rank: rank,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ProfileWrapper>
        <ProfilePic>
            <Header>Profile Picture</Header>
            <Divider sx={{marginBottom:'10px'}}/>
            <ImageContainer>
                <Avatar alt={name} src={pic} sx={{ width: 100, height: 100 }}/>
                <Typography 
                sx={{
                    fontSize:'10px',
                    color:'third.main'
                   }}>Upload/ Change you profile pic(jpg, bmp, png)</Typography>
                <Button variant="contained" component="label" color='secondary'>
                    Upload Avatar
                <input hidden accept="image/*" multiple type="file" />
                </Button>
            </ImageContainer>
        </ProfilePic>
        <ProfileDetail>
            <Header>Edit Account Details</Header>
            <Divider sx={{marginBottom:'10px'}}/>
                {/* <TextField size="small" fullWidth id="first_name" label="First Name" variant="outlined" sx={{margin:'10px'}}/> */}
                <div
                sx={{display:'flex'}}
                >
                <NameTextField 
                    size="small" 
                    id="first_name" 
                    label="First Name"
                    error={formik.errors.first_name && formik.touched.first_name }
                    helperText={formik.touched.first_name && formik.errors.first_name}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    variant="outlined" />
                <NameTextField 
                    size="small" 
                    id="middle_name" 
                    label="Middle Name" 
                    error={formik.errors.middle_name && formik.touched.middle_name }
                    helperText={formik.touched.middle_name && formik.errors.middle_name}
                    value={formik.values.middle_name}
                    onChange={formik.handleChange}
                    variant="outlined" />
                <NameTextField 
                    size="small" 
                    id="last_name" 
                    label="Last Name" 
                    error={formik.errors.last_name && formik.touched.last_name }
                    helperText={formik.touched.last_name && formik.errors.last_name}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    variant="outlined" />
                </div>
                <TextField 
                    size="small" 
                    id="email" 
                    label="Email" 
                    error={formik.errors.email && formik.touched.email }
                    helperText={formik.touched.email && formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    variant="outlined" 
                    sx={{width:'95%'}}  />
                <div
                sx={{display:'flex', flexWrap:'wrap'}}
                >
                <StyledTextField 
                    size="small" 
                    id="mobile" 
                    label="Mobile"
                    error={formik.errors.mobile && formik.touched.mobile }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    variant="outlined"  />
                <StyledTextField 
                    size="small" 
                    id="rank" 
                    label="Rank" 
                    error={formik.errors.rank && formik.touched.rank }
                    helperText={formik.touched.rank && formik.errors.rank}
                    value={formik.values.rank}
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
                    >Change Details</Button>
                    </Buttons>
        </ProfileDetail>
    </ProfileWrapper>
  )
}
