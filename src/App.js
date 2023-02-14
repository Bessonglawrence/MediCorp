
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

const App = () => {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="AdminDashBoard" element={<AdminDashBoard />} />
        </Route>
        <Route path="*" element={<Nopage />} />
        <Route path='Completed' element={<Completed />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
