import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Select from 'react-select';
import "../App.css";
import {
    Referees,
    UltraSound,
    XRay,
    DopplerUltraSound,
    CTScan,
    SpecialProcedures,
    Cardiology
} from '../Data/Data';

function AppointmentForm({ onFormSubmit, updateFormState, formState }) {

    const [validated, setValidated] = useState(false);

    const [displayReceipt, setDisplayReceipt] = useState(false);

    const [inputs, setInputs] = useState({});

    const [generating, setGenerating] = useState(true)

    const [regenerate, setRegenerate] = useState(false)

    const [ toggle, setToggle ] = useState(false);

    const [ indicator, setIndicator ] = useState(false);

    useEffect(() => {
        if (formState == 'regenerating') {
            setRegenerate(prevState => !prevState);
            updateFormState('filling');
            setToggle(true)
        }
    }, [formState])


    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const selectChange = (k, value) => {
        let newInputs = Object.assign(inputs, {});
        newInputs[k] = value;
        setInputs(newInputs)
    }


    const handleRegenerate = (event) =>{
        event.preventDefault();
        setRegenerate(false);
        setIndicator(true)
        setTimeout(() => {
            onFormSubmit({ ...inputs, regenerate });
            updateFormState('submitted');
            setIndicator(false);
        }, 5000);
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setDisplayReceipt(true);
            setTimeout(() => {
                setGenerating(false)
                onFormSubmit({ ...inputs, regenerate });
            }, 5000);
            setValidated(true)
            console.log(inputs);
        }

    };

    return (
        <div className='container' id='mainform'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
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

                <Form.Group as={Col} className="mb-2" controlId="validationCustom02" id='select_wrapper'>
                    <Form.Label>Refered by</Form.Label>
                    <Form.Select aria-label="Default select example">
                        {
                            Referees.map((referee) => <option key={referee.id} style={{ height: 100 }} >{referee.name}</option>)
                        }
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Row>

                    <Form.Group as={Col} className="mb-2" md="6" controlId="validationCustom02">
                        <Form.Label>Test Date</Form.Label>
                        <Form.Control
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

                <h5 className="d-flex justify-content-center">Select Test(s)</h5>

                <Row className='mb-4'>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>ULTRASOUND</Form.Label>
                        <Select
                            options={UltraSound.map((test) => ({ value: test.id, label: test.name }))}
                            isMulti
                            onChange={(v) => selectChange('ultraSounds', v)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>X-RAY</Form.Label>
                        <Select
                            options={XRay.map((test) => ({ value: test.id, label: test.name }))}
                            isMulti
                            onChange={(v) => selectChange('xRayTests', v)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>CARDIOLOGY</Form.Label>
                        <Select
                            options={Cardiology.map((test) => ({ value: test.id, label: test.name }))}
                            isMulti
                            onChange={(v) => selectChange('cardiologyTests', v)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row className='mb-4'>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>DOPPLER ULTRA SOUND</Form.Label>
                        <Select
                            options={DopplerUltraSound.map((test) => ({ value: test.id, label: test.name }))}
                            isMulti
                            onChange={(v) => selectChange('dopplerUltraSounds', v)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>CT SCAN</Form.Label>
                        <Select
                            options={CTScan.map((test) => ({ value: test.id, label: test.name }))}
                            isMulti
                            onChange={(v) => selectChange('ctScanTests', v)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>SPECIAL PROCEDURE</Form.Label>
                        <Select
                            options={SpecialProcedures.map((test) => ({ value: test.id, label: test.name }))}
                            isMulti
                            onChange={(v) => selectChange('specialProcedures', v)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group>
                    <Form.Check
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>

                { 
                    toggle &&
                   
                    <div className="d-flex justify-content-center">
                        { 
                            regenerate 
                            ? 
                            <Button variant="primary" size="lg" onClick={handleRegenerate}>
                                Regenerate Receipt
                            </Button>
                            :
                            <div>
                                { indicator &&
                                <div>
                                    <Spinner animation='grow' variant='primary' style={{ marginLeft: 90 }} />
                                    <h4 className='d-flex justify-content-center'>Regenerating Receipt ...</h4> 
                                </div>  
                                }
                            </div>
                        }
                    </div>
                }
                

                {!displayReceipt ?

                    <div className="d-flex justify-content-center" id='receipt-button' >
                        {Object.keys(inputs).length > 0 ?
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
                            generating &&
                            <div>
                                <Spinner animation='grow' variant='primary' style={{ marginLeft: 90 }} />
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
