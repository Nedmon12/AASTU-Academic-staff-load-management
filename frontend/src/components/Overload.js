import React,{useContext, useState} from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Button, Checkbox, Divider, duration, FormControlLabel, TextField, Typography } from '@mui/material'
import ProfileContext from './ProfileContext'
import OverloadTable from './OverloadTable'
import { useLocation, useNavigate } from 'react-router-dom'
const Agreement=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'20px',
    alignSelf:'center',
    width:'80%',
    borderRadius:'5px',
    // background:theme.palette.background.bread,
    boxShadow: `0px 4px 4px ${theme.palette.background.shadow}`,
    padding:'5px 20px 100px 20px'
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
    flexWrap:'wrap',
}))
const Information=styled(Typography)(({theme})=>({
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '17px',
    lineHeight: '28px',
    color:theme.palette.primary.darkFade,
    "& ol":
    {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '28px',
    }
}))
const StyledForm=styled('form')(({theme})=>({
    display:'flex',
    gap:'20px',
    flexWrap:'wrap',
}))
const StyledTextField=styled(TextField)(({theme})=>({
    "& input":{
        width:'400px'
    },
    "& label":{
        color: theme.palette.third.main,
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '20px',
    }
}))
const Buttons=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    gap:'15px',
    margin:'10px 5px'

}))
const Footer=styled('td')(({theme})=>({
    width:'100%',
    background:theme.palette.background.default,
    display:'flex',
    justifyContent:'flex-end',
    gap:'20px',
    borderBottom: `0.5px solid ${theme.palette.third.light}`
}))
const FooterWrapper=styled('tr')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
    paddingRight:'20px',
    alignItems:'center'

}))
export default function Overload() {
    const {state: {doc_id,view}}=useLocation();
    const navigate=useNavigate();
    const {state}=useContext(ProfileContext);
    const{name, college,rank,dep,mobile,calendar,details}=state;
    const{year, semester,duration,n_weeks}=calendar;
    const {expectedLoad,payment_rate,leh,load}=details;
    const overload=load>expectedLoad?load-expectedLoad:0;
    const options = {
      filter:false,
      selectableRows:'none',
      rowsPerPage:3,
      rowsPerPageOptions:[3,10,20,40],
      rowHover:false,
      responsive:'vertical',
      pagination:false,
      customFooter:(count, page, rowsPerPage, changeRowsPerPage, changePage) => {
        return(<FooterWrapper>
          <Footer>Total Lecture Equivalent Hours <Divider orientation='vertical' flexItem /> {leh}</Footer>
          <Footer>Expected Load<Divider orientation='vertical' flexItem /> {expectedLoad}</Footer>
          <Footer>Total Over Load <Divider orientation='vertical' flexItem /> {overload}</Footer>
          </FooterWrapper>)} 
 
};
    const [agree,setAgree]=useState(false);
  return (
    <Agreement>
        <Header>
            Staff Overload Agreement Form
        </Header>
        <StyledForm>
        <StyledTextField
          disabled
          id="name"
          label="Instructor's Name"
          variant="standard"
          value={name}
        />
        <StyledTextField
          disabled
          id="rank"
          label="Academic Rank"
          variant="standard"
          value={rank}
        />
        <StyledTextField
          disabled
          id="college"
          label="College"
          variant="standard"
          value={college}
        />
         <StyledTextField
          disabled
          id="dep"
          label="Department"
          variant="standard"
          value={dep}
        />
        <StyledTextField
          disabled
          id="year"
          label="Academic Year"
          variant="standard"
          value={year}
        />
        <StyledTextField
          disabled
          id="semester"
          label="Semester Term"
          variant="standard"
          value={semester}
        />
        <StyledTextField
          disabled
          id="mobile"
          label="Mobile"
          variant="standard"
          value={mobile}
        />
        </StyledForm>
        <Information>
            {`Addis Ababa Science.and Technology University is pleased to hire the above instructor 
            (Hereafter referred to as employee) for rendering intellectual services for Regular program of the University.
             The University is obliged to pay the appropriate sum of money for the services the employee rendered.`}
        </Information>
        <Information
        sx={{marginLeft:'20px',}}
        >
         <ol>
           <li> {`The assignment given  to you is as follows:`}
              <OverloadTable options={options} title={view?"Load Assignment":"Current Assignment"}/>
           </li>
           <li>{`The Normal period of the semester is from to ${duration} during which based on the
                 Academic Rank the University will pay the employee a gross sum of birr ${n_weeks*payment_rate*overload}, 
                 (${(n_weeks*payment_rate*overload)/2}) 
                 payable after submission of the final grade of all students to the registrar office.
                The payment is subjected to income tax deduction and it shall in principle computed at
                 a rate of ${n_weeks} weeks X per ${payment_rate} LEH X ${overload} LEH`}</li>
           <li> {`In addition to the above assignments, the Employee shall invigilate examination as assigned; 
                 submit copies of any handouts, test and exam papers, student grades any related documents to the  Department head.`}</li>
           <li> {`The university shall not he obliged to make any payment where for any reason classes are interrupted,
            and the semester course is not be properly covered. `}</li>
         </ol>
        </Information>
        {
          view?
          <Information>
            The Instructor has agreed to all the terms stated above.
          </Information>:
                  <FormControlLabel control={<Checkbox 
                color='secondary' 
                value={agree}
                onChange={()=>setAgree(!agree)}
                sx={{color:'third.main', }}
                />} 
                label="I agree to the terms stated above" 
        />
        }

  
        <Buttons>
                <Button variant="contained"
                    size="medium"
                    onClick={()=>navigate('/staff_overload')}
                    sx={{
                    fontWeight: 400,
                    color:'#fff',
                    bgcolor:'gray',
                    "&:hover":{
                    bgcolor:'darkGray'}}}
                >Cancel</Button>
                {
                  view?
                  <Button variant="contained"
                  size="medium"
                  sx={{
                  bgcolor:'secondary.main',
                  fontWeight: 400,
                  color:'#fff',
                  "&:hover":{
                  bgcolor:'secondary.hover',}, }}
                  >Print </Button>:
                  <Button variant="contained"
                      disabled={!agree}
                      size="medium"
                      sx={{
                      bgcolor:'secondary.main',
                      fontWeight: 400,
                      color:'#fff',
                      "&:hover":{
                      bgcolor:'secondary.hover',}, }}
                      >Submit </Button>
                }
        </Buttons>
    </Agreement>
  )
}
