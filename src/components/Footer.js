
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { FaEnvelope} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className=" bg-light pt-5 pb-4 mt-20">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-6" id="news-letter">
                        <h4>Subscribe to our news letter</h4>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h6>By Subscribing to out news letter, you will receive daily advice on good health practices</h6>
                                    <Button className='p-2.5'>Subscribe</Button>
                                </div>
                                <div className='col-md-3' id='footerIcon'>
                                    <FaEnvelope size="4rem" color='#427eb7' />
                                </div>
                            </div> 
                    </div>
                    <div className="col-6 col-md-3 ml-10">
                        <h3>Get In Touch</h3>
                        <h6>Phone Number</h6>
                        <span className='pb-5'>+237 7673647736</span>
                        <h6>Email</h6>
                        <span>info@medicorp.com</span>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3>Get In Touch</h3>
                        <h6>Phone Number</h6>
                        <span>+237 7673647736</span>
                        <h6>Email</h6>
                        <span>info@medicorp.com</span>
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