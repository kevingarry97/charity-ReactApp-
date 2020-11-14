import React from 'react';
import { NavLink } from 'react-router-dom';
import { MonetizationOn } from '@material-ui/icons';
import Button from '@material-ui/core/Button'
import { green } from '@material-ui/core/colors';

function Donate() {
    return (
        <NavLink to="/donate" style={{ textDecoration: "none"}}>
            <Button variant="contained" size="large" style={{ fontWeight: 'bold', margin: 10, color: '#fff', backgroundColor: green['A700']}} startIcon={<MonetizationOn />}>
                Donate Now
            </Button> 
        </NavLink>
    );
}

export default Donate;