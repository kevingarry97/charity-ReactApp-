import React from 'react';
import './css/raising.css';

const Raising = () => {
    return (
        <div className="image-bg mt-5">
            <div className="container">
                <div className="row text-white text-center py-5">
                    <div className="col-md-3 col-6 border-right py-3">
                        <h3 className="font-weight-bolder">6200+</h3>
                        <span>Donation</span>
                    </div>
                    <div className="col-md-3 col-6 border-right py-3">
                        <h3 className="font-weight-bolder">6200+</h3>
                        <span>Fundraisings</span>
                    </div>
                    <div className="col-md-3 col-6 border-right py-3">
                        <h3 className="font-weight-bolder">6200+</h3>
                        <span>Volunteers</span>
                    </div>
                    <div className="col-md-3 col-6 py-3">
                        <h3 className="font-weight-bolder">6200+</h3>
                        <span>Projects</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Raising;