import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';
import { FaEnvelope} from "react-icons/fa";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";




const Footer = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert(input)
    };

    const [input, setInput] = useState({});

    const handleChange = (event) =>{
        event.persist();
        setInput(event.target.value);
    }

    return (
        <footer className=" bg-light pt-5 pb-4 mt-50">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-6" id="news-letter" style={{width: 600, height: 200}}>
                        <h4 className='mt-2'>Subscribe to our news letter</h4>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h6 style={{marginTop: 5, fontStyle: 'italic'}}>Receive updates on our latest deals and promotion prices.</h6>
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
                                            <Button className='p-2.5' onClick={handleSubmit}>Subscribe</Button>
                                        </Col>
                                    </Row>
                                    
                                </div>
                                <div className='col-md-3' id='footerIcon'>
                                    <FaEnvelope size="4rem" color='#427eb7' style={{marginLeft: 20}} />
                                </div>
                            </div> 
                    </div>
                    <div className="col-6 col-md-3" style={{marginLeft: 80}}>
                        <h3 style={{marginBottom: 30}}>Let's Chat</h3>
                        <BsTwitter size="2rem" color='#427eb7' style={{marginRight: 20}} id='social-icon' />
                        <BsFacebook size="2rem" color='#427eb7' style={{marginRight: 20}} id='social-icon' />
                        <BsInstagram size="2rem" color='#427eb7' id='social-icon' />
                        
                    </div>
                    <div className="col-6 col-md-3" style={{marginLeft: - 20}}>
                        <h3>Get In Touch</h3>
                        <h6>Phone Number</h6>
                        <strong>+237 7673647736</strong>
                        <h6>Email</h6>
                        <strong>info@medicorp.com</strong>
                    </div>
                </div>
            </div>
            <div className="text-center strong" id="powered-by-section">
                <a href="#" target="_blank"> Designed By PixxelPerfect</a>
            </div>
        </footer>
    )
}

export default Footer;