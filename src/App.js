
import React,{useState} from 'react';
import {
  Completed,
  DashBoard,
  Home,
  LayOut,
  Nopage,
  Login,
  PageLayOut
} from './Pages';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useAuthContext } from './hooks/useAuthContext';


const App = () => {


  const  { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />} >
            <Route path="/" element={!user ? <Home />  : <Navigate to="/dashboard" /> } />
            <Route 
            path='/dashboard' 
            element={user ? <DashBoard /> : <Navigate to="/login" />} />
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
