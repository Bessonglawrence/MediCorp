import React,{ useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../Pages/AdminDashBoard/DashBoard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
 import BarPage from "../Pages/DashBoardPages/BarPage";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme/theme";
//import Calendar from "./scenes/calendar/calendar";

const DashBoardRoute = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
                <Topbar />
                <Routes>
                <Route path="/bar" element={<Dashboard />} /> 
                <Route path="/" element={<BarPage />} />
                </Routes>
            </main>
            </div>
        </ThemeProvider>      
    </ColorModeContext.Provider>
  );
}

export default DashBoardRoute;