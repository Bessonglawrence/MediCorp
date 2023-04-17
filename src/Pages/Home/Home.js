import React,{useState} from 'react';
import Footer from '../../components/Footer';
import AppointmentForm from '../../components/AppointmentForm';
import Reciept from '../../components/Reciept';
import '../../App.css'
import LayOut from '../LayOut/LayOut';

const Home = () => {

  const [data, setData] = useState({});
  const [formState, setFormSate] = useState('filling'); // filling | submitted | regenerating
  const onFormSubmit = (formData) =>{
    setData(formData)
  }

  const updateFormState = (newState) => {
    setFormSate(newState);
  }

  return (
    <div id='background_image'>
        {/* <LayOut /> */}
        <AppointmentForm formState={formState} updateFormState={updateFormState} onFormSubmit={onFormSubmit}/>
        <Reciept formState={formState} updateFormState={updateFormState} data={data}/>
        <Footer />
    </div>
    
  )
}

export default Home;
