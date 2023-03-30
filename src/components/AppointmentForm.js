import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import  Spinner  from 'react-bootstrap/Spinner';
import Select from 'react-select';
import "../App.css";
import { Referees, BloodTest, BoneTest, UltraSound } from '../Data/Data';

function AppointmentForm({onFormSubmit}) {

    const [validated, setValidated] = useState(false);

    const [displayReceipt, setDisplayReceipt] = useState(false);

    const [inputs, setInputs] = useState({});

    const [generating, setGenerating] = useState(false)



    const handleChange = (event) =>{
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const selectChange = (k, value) => {
        setInputs(...inputs,{ k: value })
    }
 


    const handleSubmit = (event) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        setDisplayReceipt(true);
        setTimeout(() =>{
            setGenerating(true)
            onFormSubmit({...inputs});
        }, 5000);
  
        setValidated(true)
        console.log(inputs);
      }

    };

  return (
    <div className='container' id='mainform'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomfirstName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
               
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a Email.
                    </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
            </Row>

            <Form.Group as={Col} className="mb-2" controlId="validationCustomPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    required
                    type="numeric"
                    placeholder="+237 334 334 334"
                    name="number"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-2"  controlId="validationCustom02">
                <Form.Label>Refered by</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Who were you refered by?</option>
                    {
                        Referees.map((referee) => <option key={referee.id}>{referee.name}</option>)
                    }
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Row>

            <Form.Group as={Col} className="mb-2" md="6" controlId="validationCustom02">
                <Form.Label>Test Date</Form.Label>
                <Form.Control
                    required
                    type="date"
                    placeholder="Select Date for test"
                    name="date"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-2" md="6" controlId="validationCustom02">
                <Form.Label>Test time</Form.Label>
                <Form.Control
                    required
                    type="time"
                    placeholder="Select time for test"
                    name="time"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            </Row>
           
            
            <Row className="mb-3">

            <Form.Group as={Col} className="mb-3" controlId="validationCustomTown">
                <Form.Label>Town</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="E.g Buea"
                    name="town"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustomQuarter">
                <Form.Label>Quarter</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Quarter" 
                    name="quarter"
                    required 
                    onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid quarter.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className='mb-3'>

                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>ULTRASOUND</Form.Label>
                    <Select options={UltraSound.map((test) => ({value: test.id, label: test.name}))} isMulti onChange={(v) => selectChange('ultraSounds', v)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>X-RAY</Form.Label>
                    <Select options={BoneTest.map((test) => ({value: test.id, label: test.name}))} isMulti onChange={(v) => selectChange('boneTests', v)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>DOPPLER ULTRA SOUND</Form.Label>
                    <Select options={BloodTest.map((test) => ({value: test.id, label: test.name}))} isMulti onChange={(v) => selectChange('bloodTests', v)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>


                {/* <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>SPECIAL PROCEDURES</Form.Label>
                    <Form.Select aria-label="Default select example" name='generalTest' onChange={handleChange}>
                        <option>SPECIAL PROCEDURES</option>
                        {
                            UltraSound.map((test) => <option value={test.id}  key={test.id}>{test.name}</option>)
                        }
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group> */}
            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>

            { !displayReceipt ?
        
                <div className= "d-flex justify-content-center" id='receipt-button' >
                    { Object.keys(inputs).length > 0 ?
                        <Button variant="primary" size="lg" type='submit'>
                            Show Receipt
                        </Button>
                        :
                        null
                    }
                </div>
                :
                <div className="d-flex justify-content-center" id='receipt-button' >
                    { 
                        !generating && 
                        <div>
                            <Spinner animation='grow' variant='primary' style={{marginLeft: 90}}/>
                            <h4 className='d-flex justify-content-center'>Generating Receipt ...</h4>
                        </div>
                    }
                </div>
            }
        </Form>
    </div>
 
  )
}

export default AppointmentForm;
