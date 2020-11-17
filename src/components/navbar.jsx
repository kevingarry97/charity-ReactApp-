import React from 'react';
import Donate from './common/donate';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <NavLink className="nav-item nav-link px-2" to="/home">
                                Home
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/about">
                                About Us
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/home">
                                Events
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/home">
                                Volunteer
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/contact">
                                Contact Us
                            </NavLink>
                        </ul>
                        <div className="ml-auto">
                            <Donate />
                        </div>
                    </div>
                </div>
                
            </nav>
        </>
    );
}

export default Navbar;