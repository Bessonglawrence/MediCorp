import React,{useEffect, useState} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme/theme';
import { Routes, Route } from 'react-router-dom';

import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';
import SidebarComponent from '../../components/Sidebar';

const AdminDashBoard = () => {

  const [theme, colorMode] = useMode();

  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //     <div className='dashboard'>
    //       <main className='content'>
    //         <Footer />
    //       </main>
    //     </div>
    //   </ThemeProvider>
    // </ColorModeContext.Provider>
    <div>
      <CssBaseline />
      <Topbar />
      <SidebarComponent />
      {/* <h1>We are in the dashboard</h1> */}
      <Footer />
    </div>
    

  )
}

export default AdminDashBoard;
