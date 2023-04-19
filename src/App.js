
import React,{useState} from 'react';
import {
  Completed,
  DashBoard,
  Home,
  LayOut,
  Nopage,
  Login
} from './Pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />} >
            <Route path="/" element={<Home /> } />
            <Route path='/dashboard' element={<DashBoard />} />
        </Route>
        <Route>
          <Route path='/completed' element={<Completed />} />
          <Route path='*' element={<Nopage />} />
          <Route path='/login' element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )

}

export default App;
