
import React,{useState} from 'react';
import {
  DashBoard,
  Home,
  LayOut
} from './Pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BarPage from './Pages/DashBoardPages/BarPage';
import SidebarComponent from './components/Sidebar';
import Topbar from './components/Topbar';
//import DashBoardRoutes from './routes/DashBoardRoute';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />} >
            <Route path="/" element={<Home /> } />
            <Route path='/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )

}

export default App;
