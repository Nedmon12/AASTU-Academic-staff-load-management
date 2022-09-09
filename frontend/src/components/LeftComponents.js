import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import styled from '@emotion/styled'

export default function staticComponents() {
    const StaticComponents=styled.span`
    display:flex;
    justify-content:left;

    `
  return (
    <StaticComponents>
    <SideBar /> 
    </StaticComponents>
  )
}