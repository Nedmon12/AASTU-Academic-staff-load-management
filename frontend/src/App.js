import "./App.css";
import {useMemo, createContext,useState} from 'react';
import {createTheme} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import LeftComponents from "./components/LeftComponents"
import RightComponents from "./components/RightComponents";
import {  ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./components/theme";
import  { StaffContextProvider } from "./components/StaffContext";
import {ProfileContextProvider} from "./components/ProfileContext"
import { Route,Routes } from "react-router-dom";
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import Login  from "./components/signIn";
//backend api url
axios.defaults.baseURL = "http://localhost:5000/api/";
 const ColorModeContext = createContext();
export default function App() {
//  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//  const prefers= prefersDarkMode ? 'dark' : 'light';
 const [mode, setMode]=useState("light");
 const colorMode = ()=>{
   setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
 }
 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
 
  return (
    <>
    <ColorModeContext.Provider value={{mode,colorMode}}>
      <ProfileContextProvider>
      <StaffContextProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline />
          <Routes>
            <Route exact path="/login" element={<Login/> } />
            <Route exact path="*" element={ <div className="alignment">
          <LeftComponents/>
          <RightComponents/>
          </div>} />
          </Routes>
          
        </ThemeProvider>
      </StaffContextProvider>
      </ProfileContextProvider>
    </ColorModeContext.Provider>
    </>
  );
}
export {ColorModeContext};


