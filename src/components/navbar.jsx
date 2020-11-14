import React from 'react';
import { SettingsPhone, Email } from '@material-ui/icons';
import Donate from './common/donate';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="border-bottom">
                <div className="container">
                    <div className="row my-md-0 my-3 text-center">
                        <div className="col-md-4 pt-md-3">
                            <SettingsPhone color="action" style={{ fontSize: 18 }} /> &nbsp;
                            <span>+250 782 345 235</span>
                        </div>
                        <div className="col-md-4">
                            <Donate />
                        </div>
                        <div className="col-md-4 pt-md-3">
                            <Email color="action" style={{ fontSize: 18 }} /> &nbsp;
                            <span>kevingarry97@gmail.com</span>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container my-3">
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
                    </div>
                </div>
                
            </nav>
        </>
    );
}

export default Navbar;