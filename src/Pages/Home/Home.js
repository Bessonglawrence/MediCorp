import React,{useState} from 'react';
import Footer from '../../components/Footer';
import AppointmentForm from '../../components/AppointmentForm';
import Reciept from '../../components/Reciept';
import '../../App.css'

const Home = () => {

  const [data, setData] = useState({});

  const onFormSubmit = (formData) =>{
    setData(formData)
  }

  return (
    <div id='background_image'>
        <AppointmentForm onFormSubmit={onFormSubmit}/>
        <Reciept data={data}/>
        <Footer />
    </div>
    
  )
}

export default Home;
