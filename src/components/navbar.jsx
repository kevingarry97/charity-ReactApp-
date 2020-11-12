import React from 'react';
import { SettingsPhone, Email } from '@material-ui/icons';
import Donate from './common/donate';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="border-bottom">
                <div className="container">
                    <div class="row my-md-0 my-3 text-center">
                        <div class="col-md-4 pt-md-3">
                            <SettingsPhone color="action" style={{ fontSize: 18 }} /> &nbsp;
                            <span>+250 782 345 235</span>
                        </div>
                        <div className="col-md-4">
                            <Donate />
                        </div>
                        <div class="col-md-4 pt-md-3">
                            <Email color="action" style={{ fontSize: 18 }} /> &nbsp;
                            <span>kevingarry97@gmail.com</span>
                        </div>
                    </div>
                </div>
            </header>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
                <div className="container my-3">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <NavLink className="nav-item nav-link px-2" to="/home">
                                Home
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/about">
                                About Us
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/events">
                                Events
                            </NavLink>
                            <NavLink className="nav-item nav-link px-2" to="/volunteer">
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