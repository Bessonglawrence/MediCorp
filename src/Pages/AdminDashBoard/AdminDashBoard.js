import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Footer from '../../components/Footer';

const AdminDashBoard = () => {
  return (
    <div className='mt-16'>
      <p> This is the AdminDashBoard page</p>
      <Footer />
    </div>
  )
}

export default AdminDashBoard;
