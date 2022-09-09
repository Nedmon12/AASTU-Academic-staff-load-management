import React,{useState} from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SettingOutlined from "@mui/icons-material/SettingsOutlined";
//import colors from "./UiComponent";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { alpha, Badge, Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Menu, MenuItem, Popover } from "@mui/material";
import Fade from '@mui/material/Fade';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useContext } from "react";
import {ColorModeContext} from '../App'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import Confirm from "./Confirm";
import { useNavigate } from "react-router-dom";
import ProfileContext from "./ProfileContext";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import StaffContext from "./StaffContext";
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
  gap:20px;
  padding: 12px 24px;
  width: 100%;
  background-color: ${props=>props.palette.background.default};
  color: ${props=>props.palette.primary.main};
  font-family: "Poppins", sans-serif;
  position: sticky;
  top: 0;
  left: 0;
  ${"" /*z-index: 3;*/}
`;

const ImgContainer = styled.div`
  padding: 5px 10px;
  background-color: ${props=>props.palette.primary.finalLight};
  display: flex;
  border-radius: 30px;
  align-items: center;
  width: fit-content;
  height:fit-content;
  gap: 15px;
  cursor:pointer;
  color: ${props=>props.palette.primary.lighter};
`;
const Title=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:"15px",
    color: theme.palette.third.main,
    fontWeight: '400',
    fontSize: '15px',
    position:'sticky',
    top:'0',
    background:theme.palette.background.default,
    borderBottom: `0.5px solid ${theme.palette.third.light}`,
}))
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop:theme.spacing(5),
    minWidth: 180,
    background:theme.palette.background.default,
    boxShadow:`0px 0px 7px ${theme.palette.background.paper}`,
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const NotificationMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    marginTop:theme.spacing(4),
    minWidth: 450,
    background:theme.palette.background.default,
    boxShadow:`0px 0px 7px ${theme.palette.background.paper}`,
    border:`1px solid ${theme.palette.third.main}`,
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const Notification=styled(Box)(({theme})=>({
  cursor:'pointer'
}))

function TopBar() {
  const [notifList,setNotifList]=useState([
    {
      id:1,
      detail:"Overload Request has been sent",
      seen:false,
      type:'/staff_overload'
    },
    {
      id:2,
      detail:"Research has been Accepted",
      seen:false,
      type:'/researches'
    },
    {
      id:3,
      detail:"Course Offerings is now open ",
      seen:false,
      type:'/offering'
    },
    {
      id:4,
      detail:"Overload Request has been sent",
      seen:false,
      type:'/staff_overload'
    },
    {
      id:5,
      detail:"Research has been Accepted",
      seen:false,
      type:'/researches'
    },
    {
      id:6,
      detail:"Course Offerings is now open ",
      seen:false,
      type:'/offering'
    },
      {
      id:7,
      detail:"Overload Request has been sent",
      seen:false,
      type:'/staff_overload'
    },
    {
      id:8,
      detail:"Research has been Accepted",
      seen:false,
      type:'/researches'
    },
    {
      id:9,
      detail:"Course Offerings is now open ",
      seen:false,
      type:'/offering'
    },
    {
      id:10,
      detail:"Overload Request has been sent",
      seen:false,
      type:'/staff_overload'
    },
    {
      id:11,
      detail:"Research has been Accepted",
      seen:false,
      type:'/researches'
    },
    {
      id:12,
      detail:"Course Offerings is now open ",
      seen:false,
      type:'/offering'
    },
  ])
  const [openNotf,setOpenNotf]=useState(false)
  const navigate=useNavigate()
  const seeNotf=(id)=>{
    setNotifList((prevNotfList)=>prevNotfList.map((list)=>{
      if(list.id===id) navigate(list.type)
      return list.id===id?{...list,seen:true}:list
    }))
    setOpenNotf(false)
  }
   const clearNotf=()=>{
    setNotifList((prevNotfList)=>prevNotfList.map((list)=>{
      return {...list,seen:true}
    }))
    setOpenNotf(false)

  }
  const {state}=useContext(ProfileContext)
  const {pic, name}=state
  const [log,setLog]=useState(false);
  const {mode,colorMode}=useContext(ColorModeContext);
  const theme=useTheme()
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const numNotf=notifList.filter((list)=>list.seen===false).length;
  return (
    <Header palette={theme.palette}>         
  <Notification onClick={()=>setOpenNotf(!openNotf)}>
  <Badge badgeContent={numNotf} color="secondary"
                      sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 20, minWidth: 20, marginRight:'3px', marginTop:'3px' } }}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}>
              <NotificationsOutlinedIcon/>
        </Badge>
        <NotificationMenu
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        PaperProps={{
          style: {
            maxHeight: '60%',
            width: '20ch',
          },
        }}
        open={openNotf}
        onClose={()=>setOpenNotf(!openNotf)}
        TransitionComponent={Fade}
      >
        {

        }
        <Title >
        Notification
          <Button variant="contained"
            size="small"
            onClick={clearNotf}
            sx={{
              bgcolor:'secondary.main',
              fontWeight: 400,
              color:'#fff',
              "&:hover":{
              bgcolor:'secondary.hover',}, }}
            >Clear</Button>
          </Title>
        {
          notifList.map((list)=>{
            return( 
              list.seen===false &&  
              <Box>   
           <MenuItem onClick={()=>seeNotf(list.id)}>
            {list.detail}
          </MenuItem>
        <Divider/>
              </Box> )
          })
        }
      </NotificationMenu>
  </Notification>
 
      <ImgContainer 
      palette={theme.palette}
      id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar src={pic} alt={name} sx={{ width: 32, height: 32 }} />
        <KeyboardArrowDownOutlined />
      </ImgContainer>
       <StyledMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>{handleClose(); navigate('/setting');}}>
          <AccountCircleOutlinedIcon/>
          Profile</MenuItem>
        <MenuItem onClick={colorMode}>
        {mode==="light"?<Brightness4Icon /> : <Brightness7Icon />}
        {mode==="light"? "Dark Mode" : "Light Mode"}
        </MenuItem>
        <Divider/>
        <MenuItem onClick={()=>setLog(true)}
        sx={{
          display:"flex",
          gap:"6px"
        }}
        >Logout
          <LogoutIcon/>
        </MenuItem>
      </StyledMenu>
        <Confirm  log={log}
        setLog={setLog} 
        message="Are you sure you wish to log out"
        />

    </Header>
  );
}

export default TopBar;
