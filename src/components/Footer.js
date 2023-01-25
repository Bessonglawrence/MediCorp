
import {Link} from 'react-router-dom';
import logo from '../Images/mainLogo.png';
const Footer = () => {
    return (
        <footer className=" bg-light pt-5 pb-4" >
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={logo} id='footerImage'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcont ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcont ut labore eo </p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4>More links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/AdminDashBoard">AdminDashBoard</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4>Categories</h4>
                        <ul>
                            <li><Link to="/en/search?category=food">Medical Advise</Link></li>
                            <li><Link to="/en/search?category=dresses">Clinical good practices</Link></li>
                            <li><Link to="/en/search?category=shoes">Shoes</Link></li>
                            <li><Link to="/en/search?category=bags">Bags</Link></li>
                            <li><Link to="/en/search?category=drinks">Drinks</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center strong" id="powered-by-section">
                    <a href="https://digitalrenter.com" target="_blank">Developed with 💜 by Digital Renter Dev</a>
                </div>

            </div>

        </footer>
    )
}

export default Footer;