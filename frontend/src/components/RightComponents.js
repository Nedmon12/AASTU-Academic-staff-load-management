import React from 'react'
import styled from '@emotion/styled';
import BreadCrumbs from './BreadCrumbs'
import TopBar from './TopBar';
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Researches from "./Researches"
import NewResearches from "./NewResearches"
import StaffOverload from "./StaffOverload"
import Settings from "./Setting"
import Overload from './Overload';
import CourseOffering from './CourseOffering';

export default function LeftComponents() {
    const LeftComponents=styled.span`
    display:flex;
    flex-direction:column;
    justify-content:right;
    width: 100%;
    `;
    const Static=styled('span')(({theme})=>({
      position:'sticky',
       top:0,
       background:theme.palette.background.default,
       zIndex:3,
    }))
    

  return (
    <LeftComponents>
      <Static>
        <TopBar/>
        <BreadCrumbs/>
      </Static>
        <Routes>
        <Route exact path="*" element={ <Home />} />
        <Route exact path="/researches" element={ <Researches />} />
        <Route exact path="/researches/new_researches" element={ <NewResearches />} />
        <Route exact path="/staff_overload" element={<StaffOverload />} />
        <Route exact path="/staff_overload/agreement" element={<Overload />} />
        <Route exact path="/offering" element={<CourseOffering />} />
        <Route exact path="/setting" element={ <Settings />} />
        <Route exact path="/setting/security" element={ <Settings />} />
        <Route exact path="/setting/appearances" element={ <Settings />} />

      </Routes>
    </LeftComponents>
  )
}

