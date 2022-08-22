import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { Link } from "react-router-dom";

// routing
import MainRoutes from "./routes/mainRoutes";

// defaultTheme
// import themes from 'themes';

// project imports
// import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={themes(customization)}> */}
      <CssBaseline />
      {/* <NavigationScroll> */}
      {/* <Routes /> */}
      <MainRoutes />
      {/* </NavigationScroll> */}
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  );
}

export default App;
