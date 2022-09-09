import styled from '@emotion/styled'
import { Avatar, Button, Chip, Divider, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Check from '@mui/icons-material/Check';

const Wrapper=styled('span')(({theme})=>({
    padding: '36px 14px 37px 17px',
    background:theme.palette.background.default,
  boxShadow: `0px 0px 7px ${theme.palette.background.shadow}`,
     width: '100%',
    border: `1px solid ${theme.palette.third.main}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    borderRadius: '3px',

}))
const Header=styled(Box)(({theme})=>({
    color: props=>props.active?theme.palette.primary.main:theme.palette.third.main,
    fontWeight: '600',
    fontSize: '16px',
}))
const StyledTypography=styled(Box)(({theme})=>({
    color:theme.palette.third.main,
    fontWeight: '600',
    fontSize: '16px',
}))
const Detail=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-around'
}))
const MemberWrap=styled(Box)(({theme})=>({
    display:'flex',
    gap:'10px',
    flexWrap:'wrap'
}))
const steps = [
  'Submitted',
  'Pending',
  'Active',
  'Expired',
];
const members=[
  {
    name:"Solomon Tesfa",
    pic:'/images/photo.png'
  },
   {
    name:"Tsion Tesfa",
    pic:'/images/photo.png'
  },
   {
    name:"Leul Tesfa",
    pic:'/images/photo.png'
  },
]

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.third.main,
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: theme.palette.secondary.main,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: theme.palette.secondary.main,
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 17,
    height: 17,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.secondary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.secondary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.third.main : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
export default function ResearchDetails(props) {
const {rowData}=props
  return (
    <>
    <tr>
    <td colSpan={6}>
      <Wrapper>
       <Stepper activeStep={rowData[2]==="Pending"?1:rowData[2]==="Active"?2:3} alternativeLabel  connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel StepIconComponent={QontoStepIcon} ><Header >{label}</Header></StepLabel>
          </Step>
        ))}
      </Stepper>
        <Divider/>
      <Detail>
        <StyledTypography>{`Type: Internal`}</StyledTypography>
        <StyledTypography>{`Institution: Addis Ababa Science and Technology University`}</StyledTypography> 
      </Detail>
        <Divider/>
      {rowData[2]!=='Pending' &&
       <Detail>
        <StyledTypography>{`Expire Date: ${rowData[3]}`}</StyledTypography>
        <Button variant="contained"
        size="small"
        sx={{
          bgcolor:'secondary.dark',
          fontWeight: 400,
          color:'#fff',
          "&:hover":{
          bgcolor:'secondary.hover',
          }
          }}
        >Extend Research</Button>
      </Detail>   
      }  
      <Divider/>
       <MemberWrap>
        <StyledTypography>{`Members: `}</StyledTypography>
        {
          members.map((mem)=>(
            <Chip
              avatar={<Avatar alt={mem.name} src={mem.pic} />}
              label={mem.name}
            />
          ))
        }
      </MemberWrap> 
      <Divider/>
      </Wrapper>
        </td></tr>
    </>
  )
}
