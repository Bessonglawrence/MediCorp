
import React from 'react';
import {
  Home, 
  AdminDashBoard,
  Nopage,
  LayOut,
  Completed
} from './Pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Topbar from './components/Topbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme/theme';

const App = () => {


  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
              <Route path='AdminDashBoard' element={<AdminDashBoard />} />
              
              <Route path='/' element={<LayOut /> }>
                <Route index element={<Home />} />
              </Route>
              <Route path="*" element={<Nopage />} />
              <Route path='Completed' element={<Completed />} />

            </Routes>  
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )

}

export default App;
