import { Outlet, Link, useLocation } from "react-router-dom";
import logo from '../../Images/logo.png';
import Button from 'react-bootstrap/Button';
import "../../App.css"
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';



const LayOut = () => {

  const { user } = useAuthContext();

  //const location = useLocation();
  const reloadPage = () => {
    window.location.reload();
  }


    return (
        <>
          <nav className="navbar navbar-expand-lg bg-light sticky-top" id="topnavbar">
            <a className="navbar-brand" href="#"><img src={logo} onClick={() => reloadPage()} /></a>
                <div style={{ marginLeft: "55%", color: 'white', padding: 4}}>
               { !user ?
                  <Link to='/login' >
                    <Button style={{marginRight: 5, marginTop: 3}}>
                      LogIn as Admin
                    </Button>
                  </Link>
                  :
                  null
                }
                  
                </div>
                
          </nav>
          <Outlet />
        </>
      )
};

export default LayOut;