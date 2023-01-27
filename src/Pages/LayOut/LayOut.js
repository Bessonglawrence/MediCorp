import { Outlet, Link } from "react-router-dom";
import logo from '../../Images/logo.png';
import "../../App.css"


const LayOut = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg bg-light sticky-top" id="topnavbar">
            <a className="navbar-brand" href="#"><img src={logo} height="70" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/"  className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/AdminDashBoard" className="nav-link" >AdminDashBoard</Link>
                </li>
                </ul>
            </div>
          </nav>
          <Outlet />
        </>
      )
};

export default LayOut;