import React from 'react';
import { DirectionsWalk } from '@material-ui/icons';
import Button from '@material-ui/core/Button'
import { grey, green } from '@material-ui/core/colors';
import './css/volunteer.css';

const Volunteer = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="bg-image">
                    <div className="row">
                        <div className="col-sm-7">
                            <h1 className="font-weight-bolder text-white">Let's Change The World <br/> With Humanity</h1>
                        </div>
                        <div className="col-sm-3 offset-sm-2 mt-5">
                            <Button variant="contained" startIcon={<DirectionsWalk />} size="large" style={{ backgroundColor: "#fff", color: green['A700'] , fontWeight: 'bold'}}>Volunteer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Volunteer;