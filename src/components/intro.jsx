import React from 'react';
import Charity from '../assets/images/charity.svg';
import Donate from './common/donate';

import './css/intro.css';

const Intro = () => {
    return (
        <section style={{position: "relative", width: "100%", boxSizing: "border-box" }}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-7 mt-5">
                        <div className="content text-muted">
                            <h2 style={{color: "#011840"}}>Waves shape banner</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?</p>
                            <Donate />
                        </div>
                    </div>
                    <div className="col-md-5 mt-5" style={{ zIndex: 1}}>
                        <div style={{ position: 'absolute' }}>
                            <img src={Charity} className="img-fluid" alt=""/>
                        </div>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#00c853" d="M55.2,-67.8C68.2,-54.9,73.1,-34.3,73.8,-15.3C74.4,3.8,70.9,21.3,62.6,36.5C54.3,51.7,41.2,64.4,25.3,70.9C9.3,77.3,-9.4,77.4,-28.2,72.7C-47.1,67.9,-66,58.5,-76,42.9C-86.1,27.4,-87.4,5.9,-82.9,-13.7C-78.3,-33.3,-67.9,-50.9,-53.1,-63.5C-38.3,-76.1,-19.2,-83.6,1,-84.8C21.1,-85.9,42.2,-80.7,55.2,-67.8Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="custom-shape-divider-bottom-1605093493">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}

export default Intro;