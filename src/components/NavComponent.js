
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg'

const NavComponent = () =>{

    return(
        <>
            <nav className="pl-5 pr-5 navbar navbar-expand-lg navbar-light  fixed-top bg-light" id="topnavbar">
                <a className="navbar-brand" href="#"><img src={logo} height="50" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/"  className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AdminDashBoard" className="nav-link" href="#">AdminDashBoard</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <div id="clearer"></div>
        </>

    );
}

export default NavComponent;
