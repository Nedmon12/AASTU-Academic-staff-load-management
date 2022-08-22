import "./App.css";
import Courses from "./components/Courses";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { CourseContextProvider } from "./components/CourseContextProvider";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";
import { useEffect, useContext } from "react";
import axios from "axios";
import CourseContext from "./components/CourseContextProvider";

//backend api url
axios.defaults.baseURL = "http://localhost:5000/api/";

function App() {
  return (
    <>
      <CourseContextProvider>
        <ThemeProvider theme={theme}>
          <TopBar />
          <SideBar />
          <Courses />
        </ThemeProvider>
      </CourseContextProvider>
    </>
  );
}

export default App;
