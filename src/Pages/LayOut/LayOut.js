import { Outlet, Link, useLocation } from "react-router-dom";
import logo from '../../Images/logo.png';
import "../../App.css"
import Button from 'react-bootstrap/Button';



const LayOut = () => {

  //const location = useLocation();

  const reloadPage = () => {
    window.location.reload();
  }


    return (
        <>
          <nav className="navbar navbar-expand-lg bg-light sticky-top" id="topnavbar">
            <a className="navbar-brand" href="#"><img src={logo} onClick={() => reloadPage()} /></a>
                <Link to='/login'>
                  LogIn as Admin
                </Link>
          </nav>
          <Outlet />
        </>
      )
};

export default LayOut;