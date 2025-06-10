import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import CourseProvider from "../contexts/CoursesContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CourseProvider>
          <div className="content-area">
            <Navbar />

            <Outlet />
          </div>
        </CourseProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
