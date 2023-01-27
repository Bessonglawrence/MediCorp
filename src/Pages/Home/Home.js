import React from 'react';
import Footer from '../../components/Footer';
import AppointmentForm from '../../components/AppointmentForm';
import Reciept from '../../components/Reciept';
import '../../App.css'

const Home = () => {
  return (
    <div id='background_image'>
        <AppointmentForm />
        <Reciept />
        <Footer />
    </div>
    
  )
}

export default Home;
