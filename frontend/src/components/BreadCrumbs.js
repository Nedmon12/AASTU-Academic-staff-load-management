import React from "react";
import styled from "@emotion/styled";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Home } from "@mui/icons-material";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import {useTheme} from '@mui/material'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


const breadcrumbNameMap= {
  't_load': {
    title: "Teaching Load",
  },
  'a_research': {
    title: "Active Research",
  },
  'researches': {
    title: " Research",
  },
  'new_researches': {
    title: " Request Research",
  },
  'staff_overload': {
    title: " Staff Overload",
  },
  'agreement': {
    title: " Overload Agreement",
  },
  'offering': {
    title: "Course Offering",
  },
  'setting': {
    title: " Settings",
  },
    'security': {
    title: " Security",
  },
    'appearances': {
    title: " Appearances",
  },
};
const BreadcrumbsWrapper = styled.div`
  width: 100%;
  background-color:${props=> props.palette.background.bread} ;
  padding: 5px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  border-radius: 8px;
  position:sticky;
  top:0px;
`;
const BreadCrumbs= () => {
  const theme=useTheme()
  const {pathname}=useLocation();
  const pathnames = pathname.split("/").filter(x => x);
  const navigate=useNavigate();
  return (
    <BreadcrumbsWrapper palette={theme.palette}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {pathnames.length > 0 ? (
        <Link
                underline="hover"
                key="1"
                color="inherit"
                onClick={()=>navigate('/')}
                component="button"
              >
                  <Home fontSize="small" />
            </Link>
      ) : (
        <Typography underline="hover"
                key="1"
                color="inherit"> <Home fontSize="small" /> </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
            <Typography key={name} color="text.primary" fontSize={14}>
            {breadcrumbNameMap[name].title} </Typography>
        ) : (
          <Link
            underline="hover"
            key={name}
            color="inherit"
            onClick={()=>navigate(routeTo)}
            fontSize="14px"
            component="button"
          >
            {breadcrumbNameMap[name].title}
          </Link>
        );
      })}
            


      </Breadcrumbs>
    </BreadcrumbsWrapper>
  );
}

export default BreadCrumbs;
