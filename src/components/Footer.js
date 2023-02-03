import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';
import { FaEnvelope} from "react-icons/fa";

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false && displayReceipt === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //         setValidated(true)
    // };
const Footer = () => {


    const [input, setInput] = useState({});

    const handleChange = (event) =>{
        event.persist();
        setInput(inputs => ({ ...input, [event.target.name]: event.target.value }));
    }

    return (
        <footer className=" bg-light pt-5 pb-4 mt-50">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-6" id="news-letter">
                        <h4>Subscribe to our news letter</h4>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h6>By Subscribing to out news letter, you will receive daily advice on good health practices</h6>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} md="12" controlId="validationCustomQuarter">
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Enter Your Email" 
                                                    name="email"
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Button className='p-2.5' type='submit'>Subscribe</Button>
                                        </Col>
                                    </Row>
                                    
                                </div>
                                <div className='col-md-3' id='footerIcon'>
                                    <FaEnvelope size="4rem" color='#427eb7' />
                                </div>
                            </div> 
                    </div>
                    <div className="col-6 col-md-3 ml-10">
                        <h3>Let's Chat</h3>
                        <h6>Phone Number</h6>
                        <strong>+237 7673647736</strong>
                        <h6>Email</h6>
                        <strong>info@medicorp.com</strong>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3>Get In Touch</h3>
                        <h6>Phone Number</h6>
                        <strong>+237 7673647736</strong>
                        <h6>Email</h6>
                        <strong>info@medicorp.com</strong>
                    </div>
                </div>
            </div>
            <div className="text-center strong" id="powered-by-section">
                <a href="https://digitalrenter.com" target="_blank"> Designed By PixxelPerfect</a>
            </div>
        </footer>
    )
}

export default Footer;