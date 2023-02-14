import React from 'react';
import doneImage from '../../Images/doneImage.png';
import '../../App.css';
import Button from 'react-bootstrap/Button';


function Completed() {
  return (
    <div id='mainDiv'>
        <div className='container bg-light text-align-center' id='main-completed'> 
            <img src={doneImage} style={{width: 100, height: 100, marginRight: 140}} />
            <p>Thank you for completing this order. A receipt has been sent to you email</p>
            <Button variant="primary" size="lg">
                Return to Home page
            </Button>
        </div>
    </div>

  )
}

export default Completed;