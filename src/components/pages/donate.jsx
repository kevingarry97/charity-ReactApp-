import React from 'react';
import { CreditCard, AttachMoney, Money, AccountBalanceWallet, Style, Timeline, CastForEducation, Explore } from '@material-ui/icons';
import { green, deepOrange, cyan, red } from '@material-ui/core/colors';
import Navbar from '../navbar';
import Footer from '../footer';
import '../css/donate.css';

const Donate = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="mb-5">
                    <div className="contactSection" />
                    <div className="container-fluid">
                        <div className="row text-center" style={{ marginTop: '-4em'}}>
                            <div className="col-md-3 col-sm-6 my-md-0 my-2">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <CreditCard style={{ fontSize: 45, color: green['A700'] }} />
                                        <h6 className="font-weight-bold my-3" style={{ color: '#49566d'}}>Card donations</h6>
                                        <span className="text-muted font-weight-normal">
                                            Lorem ipsum dolor sit consect <br/> adipisicing elit. Totam ut.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-md-0 my-2">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <AttachMoney style={{ fontSize: 45, color: deepOrange['A700'] }} />
                                        <h6 className="font-weight-bold my-3" style={{ color: '#49566d'}}>Money donations</h6>
                                        <span className="text-muted font-weight-normal">
                                            Lorem ipsum dolor sit consect <br/> adipisicing elit. Totam ut.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-md-0 my-2">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <Money style={{ fontSize: 45, color: cyan['A700'] }} />
                                        <h6 className="font-weight-bold my-3" style={{ color: '#49566d'}}>Cash donations</h6>
                                        <span className="text-muted font-weight-normal">
                                            Lorem ipsum dolor sit consect <br/> adipisicing elit. Totam ut.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 my-md-0 my-2">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <AccountBalanceWallet style={{ fontSize: 45, color: red['A700'] }} />
                                        <h6 className="font-weight-bold my-3" style={{ color: '#49566d'}}>Wallet donations</h6>
                                        <span className="text-muted font-weight-normal">
                                            Lorem ipsum dolor sit consect <br/> adipisicing elit. Totam ut.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-8">
                                <h4 className="text-muted font-weight-bold mb-4">Enter Your Donation</h4>
                                <div className="clearfix px-4 py-2" style={{ backgroundColor: '#09de90'}}>
                                    <h1 className="font-weight-bold text-white float-left">$</h1>
                                    <h1 className="font-weight-bold text-white float-right">0.<small>00</small> </h1>
                                </div>
                                <form className="mt-5">
                                    <h3 className="text-muted font-weight-bold">Personal Info</h3>
                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">First name</label>
                                            <input type="text" className="form-control" placeholder="John" />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Last name</label>
                                            <input type="text" className="form-control" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="email" className="form-control" placeholder="user@domain.com" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Country</label>
                                            <input type="text" className="form-control" placeholder="Specify your country" />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Address</label>
                                            <input type="text" className="form-control" placeholder="Your address" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <input type="email" className="form-control" placeholder="0-00-0000-00" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Message</label>
                                        <textarea name="" id="" cols="30" rows="10" className="form-control">
                                            Your Message
                                        </textarea>
                                    </div>
                                    <h3 className="text-muted font-weight-bold mt-5">Payment Info</h3>
                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Country</label>
                                            <input type="text" className="form-control" placeholder="Specify your country" />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Address</label>
                                            <input type="text" className="form-control" placeholder="Your address" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <input type="email" className="form-control" placeholder="0-00-0000-00" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Country</label>
                                            <input type="text" className="form-control" placeholder="Specify your country" />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <label htmlFor="">Address</label>
                                            <input type="text" className="form-control" placeholder="Your address" />
                                        </div>
                                    </div>
                                    <button className="btn mt-3 btn-lg" style={{ backgroundColor: '#09de90', color: "#fff", borderRadius: 0 }}>Donate</button>
                                </form>
                            </div>
                            <div className="col-md-4 mt-md-5 mt-3">
                                <div className="card shadow border-0">
                                    <img src="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_960_720.jpg" className="img-fluid" alt=""/>
                                    <div className="card-body bg-light">
                                        <h5 className="text-muted font-weight-bold text-center">They want help</h5>
                                        <div className="media mt-4 mb-2">
                                            <Style style={{ color: green['A700']}} />
                                            <div className="media-body">
                                                <span className="pl-2 text-muted"><strong>Goal:</strong> 2500</span>
                                            </div>
                                        </div>
                                        <div className="media ">
                                            <Timeline style={{ color: green['A700']}} />
                                            <div className="media-body">
                                                <span className="pl-2 text-muted"><strong>Raised:</strong> 300</span>
                                            </div>
                                        </div>
                                        <h6 className="my-5 text-muted text-center">Raised by <strong>34</strong> donors</h6>
                                    </div>
                                </div>
                                <div className="card shadow border-0 mt-5">
                                    <div className="card-body bg-light px-3">
                                        <div className="media">
                                            <img src="https://picsum.photos/100" className="img-fluid" alt=""/>
                                            <div className="media-body pl-2">
                                                <strong className="text-muted" style={{fontSize: 12}}>CREATED APRIL 11, 2020</strong>
                                                <p className="font-weight-bold text-muted" style={{ fontSize: 17}}>Organizer: <span className="text-success">John Doe</span></p>
                                                <div className="media pl-3 mt-4">
                                                    <CastForEducation style={{ color: green['A700']}} />
                                                    <div className="media-body">
                                                        <p className="text-muted pl-3">Education</p>
                                                    </div>
                                                </div>
                                                <div className="media pl-3">
                                                    <Explore style={{ color: green['A700']}} />
                                                    <div className="media-body">
                                                        <p className="text-muted pl-3">AUCA, Kigali</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Donate;