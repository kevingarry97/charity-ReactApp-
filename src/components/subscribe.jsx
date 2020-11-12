import React from 'react';
import './css/subscribe.css';

const Subscribe = () => {
    return (
        <div className="text-center">
            <h2 className="text-white">Follow us For further information</h2>
            <div className="subscribeContainer">
                <div className="subscribeBox mt-4 d-flex justify-content-center">
                    <input type="text" placeholder="Enter your email" />
                    <button className="btn btn-success" style={{ borderRadius: 19}}> <strong>Subscribe</strong></button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;