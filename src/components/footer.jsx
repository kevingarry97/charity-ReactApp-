import React from 'react';
import { LocationOn, Email, Facebook, GitHub, Instagram, PermPhoneMsg, Twitter } from '@material-ui/icons';
import Section from './subscribe';
import './css/footer.css'

const Footer = () => {
    return (
        <div className="footerSection pt-5">
            <div className="container">
                <Section />
                <div className="row mt-md-5 pt-md-5 text-white">
                    <div className="col-md-3 col-sm-6 my-3">
                        <h3 className="font-weight-bold mt-5 mb-3">LOGO</h3>
                        <p>Build and Earn with your online store with lots of cool and exclusive wpo-features</p>
                        <Facebook style={{fontSize: 35}} />&nbsp;&nbsp;
                        <GitHub style={{fontSize: 28}} />&nbsp;&nbsp;
                        <Twitter style={{fontSize: 30}} />&nbsp;&nbsp;
                        <Instagram style={{fontSize: 30}} />
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <h4 className="mb-4">Top News</h4>
                        <div class="media my-3">
                            <img src="https://picsum.photos/100" class="img-fluid" />
                            <div class="media-body ml-2">
                                <h6 class="mt-0">Education for all poor children</h6>
                                <span style={{ fontSize: 14, marginTop: 20 }}>12 Nov, 2020</span>
                            </div>
                        </div>
                        <div class="media my-3">
                            <img src="https://picsum.photos/100" class="img-fluid" />
                            <div class="media-body ml-2">
                                <h6 class="mt-0">Education for all poor children</h6>
                                <span style={{ fontSize: 14, marginTop: 20 }}>12 Nov, 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <h4 className="mb-4">Useful Links</h4>
                        <p><a>About Us</a></p>
                        <p><a>Our Causes</a></p>
                        <p><a>Our Mission</a></p>
                        <p><a>Contact Us</a></p>
                        <p><a>Our Event</a></p>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <h4 className="mb-4">Contact</h4>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                        <div className="mt-4">
                            <div class="media my-3">
                                <LocationOn fontSize="small" />
                                <div class="media-body pl-2">
                                    <span>KK 457 St, Kigali city, Rwanda</span>
                                </div>
                            </div>
                            <div class="media my-3">
                                <PermPhoneMsg fontSize="small" />
                                <div class="media-body pl-2">
                                    <span>+250 783 564 726</span>
                                </div>
                            </div>
                            <div class="media my-3">
                                <Email fontSize="small" />
                                <div class="media-body pl-2">
                                    <span>kevin@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom mt-5 py-4">
                <div className="container text-center">
                    <span className="text-white">© 2020. All rights reserved</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;