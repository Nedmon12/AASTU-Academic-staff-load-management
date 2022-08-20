import "./App.css";
import Courses from "./components/Courses";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { CourseContextProvider } from "./components/CourseContextProvider";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";

function App() {
  return (
    <>
      <CourseContextProvider>
        <ThemeProvider theme={theme}>
          <Button color="primary">hell world</Button>
          <TopBar />
          <SideBar />
          <Courses />
        </ThemeProvider>
      </CourseContextProvider>
    </>
  );
}

export default App;
