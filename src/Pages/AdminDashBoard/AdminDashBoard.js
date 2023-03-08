import React,{useEffect, useState} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme/theme';

import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';

const AdminDashBoard = () => {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='dashboard'>
          <main>
            <Topbar />
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
   
  )
}

export default AdminDashBoard;
