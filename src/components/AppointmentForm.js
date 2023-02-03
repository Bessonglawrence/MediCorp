import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "../App.css";
import { Referees, BloodTest, BoneTest } from '../Data/Data';

function AppointmentForm({onFormSubmit}) {

    const [validated, setValidated] = useState(false);

    const [displayReceipt, setDisplayReceipt] = useState(false);

    const handleReceipt = () =>{

    }


    const [inputs, setInputs] = useState({});

    const handleChange = (event) =>{
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }


    const handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false && displayReceipt === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }

        event.preventDefault();
        setTimeout(() =>{
            setDisplayReceipt(true);
            onFormSubmit(inputs);
        }, 5000);
  

        setValidated(true)
        console.log(inputs.town)
    };

  return (
    <div className='container' id='mainform'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomfirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomlastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
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

            <Form.Group as={Col} className="mb-2" controlId="validationCustom02">
                <Form.Label>Refered by</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    {
                        Referees.map((referee) => <option key={referee.id}>{referee.name}</option>)
                    }
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
            <Row className="mb-3">

            <Form.Group as={Col} className="mb-3" controlId="validationCustomTown">
                <Form.Label>Town</Form.Label>
                <Form.Control
                    required
                    type="numeric"
                    placeholder="+237 334 334 334"
                    name="town"
                    onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

                <Form.Group as={Col} md="5" controlId="validationCustomQuarter">
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

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Blood Test</Form.Label>
                    <Form.Select aria-label="Default select example" name='bloodTest' onChange={handleChange}>
                        <option>Open this select menu</option>
                        {
                            BloodTest.map((test) => <option key={test.id}>{test.name}</option>)
                        }
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Bone Test</Form.Label>
                    <Form.Select aria-label="Default select example" name='boneTest' onChange={handleChange}>
                        <option>Open this select menu</option>
                        {
                            BoneTest.map((test) => <option key={test.id}>{test.name}</option>)
                        }
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>General Test</Form.Label>
                    <Form.Select aria-label="Default select example" name='generalTest' onChange={handleChange}>
                        <option>Open this select menu</option>
                        {
                            BloodTest.map((test) => <option key={test.id}>{test.name}</option>)
                        }
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>

            { displayReceipt
            ?
            <div className="d-flex justify-content-sm-evenly">
                <Button variant="primary" size="lg" type='submit'>
                    Pay Now
                </Button>
                <Button variant="secondary" size="lg" type='submit'>
                    Pay Over Counter
                </Button>
            </div>
            :
            <div className='d-flex justify-self-center'>
                <Button variant="primary" size="lg" type='submit'>
                    Show Receipt
                </Button>
            </div>
            }
            
        </Form>
    </div>
 
  )
}

export default AppointmentForm;
