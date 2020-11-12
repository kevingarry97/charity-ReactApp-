import React from 'react';
import Navbar from '../navbar';
import { Payment } from '@material-ui/icons';
import '../css/about.css';
import Team from '../team';
import Mission from '../mission';
import Footer from '../footer';
import Blog from '../blog';

const About = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-5 mt-5 pt-5">
                            <div className="content text-muted">
                                <h1 className="font-weight-bold pb-1" style={{color: "#011840"}}>We help the helplessly</h1>
                                <h4 className="pb-4" style={{color: "#031738"}}>Our mission. Our vision</h4>
                                <p className="paragraph pl-4 m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?</p>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div class="aboutSide">
                                <div className="card" style={{ height: '20vw'}}>
                                    <div className="card-body">
                                        <Payment style={{ fontSize: '3.1em' }} />
                                        <br/>
                                        <span className="font-weight-bold" style={{ fontSize: 12}}>Payment</span>
                                    </div>
                                </div>
                                <div className="card my-2" style={{ height: '9.7vw'}}>
                                    <div className="card-body">
                                        <Payment style={{ fontSize: '3.1em' }} />
                                        <br/>
                                        <span className="font-weight-bold" style={{ fontSize: 12}}>Payment</span>
                                    </div>
                                </div>
                                <div className="card my-2" style={{ height: '9.7vw'}}>
                                    <div className="card-body">
                                        <Payment style={{ fontSize: '3.1em' }} />
                                        <br/>
                                        <span className="font-weight-bold" style={{ fontSize: 12}}>Payment</span>
                                    </div>
                                </div>
                                <div className="card my-2" style={{ height: '9.7vw'}}>
                                    <div className="card-body">
                                        <Payment style={{ fontSize: '3.1em' }} />
                                        <br/>
                                        <span className="font-weight-bold" style={{ fontSize: 12}}>Payment</span>
                                    </div>
                                </div>
                                <div className="card my-2" style={{ height: '9.7vw'}}>
                                    <div className="card-body">
                                        <Payment style={{ fontSize: '3.1em' }} />
                                        <br/>
                                        <span className="font-weight-bold" style={{ fontSize: 12}}>Payment</span>
                                    </div>
                                </div>
                            </div>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#00c853" d="M55.2,-67.8C68.2,-54.9,73.1,-34.3,73.8,-15.3C74.4,3.8,70.9,21.3,62.6,36.5C54.3,51.7,41.2,64.4,25.3,70.9C9.3,77.3,-9.4,77.4,-28.2,72.7C-47.1,67.9,-66,58.5,-76,42.9C-86.1,27.4,-87.4,5.9,-82.9,-13.7C-78.3,-33.3,-67.9,-50.9,-53.1,-63.5C-38.3,-76.1,-19.2,-83.6,1,-84.8C21.1,-85.9,42.2,-80.7,55.2,-67.8Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Team />
                <Blog />
                <Footer />
            </main>
        </>
    );
}

export default About;