import React from 'react';
import { LocationOn, MailOutline, Phone } from '@material-ui/icons';
import Navbar from '../navbar';
import '../css/contact.css'
import Footer from '../footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <section > 
                <div className="contactSection" />
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-7 text-white" style={{ marginTop: '-20em', zIndex: 1 }}>
                            <h1 className="font-weight-bold">Contacts</h1>
                            <span>Get in touch with us by completing the below form or call us now</span>
                            <div className="card shadow border-0 mt-5">
                                <div className="card-body text-black-50 p-5">
                                    <div className="form-group">
                                        <label htmlFor="">Full name <sup className="text-danger font-weight-bold">*</sup></label>
                                        <input type="text" className="form-control" placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email <sup className="text-danger font-weight-bold">*</sup></label>
                                        <input type="email" className="form-control" placeholder="j.doe@domain.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Phone number </label>
                                        <input type="texr" className="form-control" placeholder="00-0000-0000-000-00" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Company</label>
                                        <input type="text" className="form-control" placeholder="Your company" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Subject <sup className="text-danger font-weight-bold">*</sup></label>
                                        <input type="text" className="form-control" placeholder="Title of your Message" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Message <sup className="text-danger font-weight-bold">*</sup></label>
                                        <textarea name="" id="" rows="5" className="form-control"></textarea>
                                    </div>
                                    <button className="btn mt-3" style={{ backgroundColor: '#09de90', color: '#fff', fontWeight: 'bold', borderRadius: 20}}> Send Message</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-1 text-muted mt-5">
                            <h3 className="pt-4">Contact details</h3>
                            <h6 className="font-weight-bold pt-4"> Kigali city - Rwanda, KG</h6>
                            <div className="media mt-4">
                                <LocationOn fontSize="small" style={{ marginTop: 3 }} />
                                <div className="media-body pl-2">
                                    <span>KK 457 St, Imena, <br/> Gatare, Niboye</span>
                                </div>
                            </div>
                            <div className="media mt-3">
                                <MailOutline fontSize="small" style={{ marginTop: 3 }} />
                                <div className="media-body pl-2">
                                    <span>kevin@gmail.com</span>
                                </div>
                            </div>
                            <div className="media mt-3">
                                <Phone fontSize="small" style={{ marginTop: 3 }} />
                                <div className="media-body pl-2">
                                    <span>+250 785 678 546</span>
                                </div>
                            </div>
                            <h6 className="font-weight-bold pt-4"> Nothern Province - Rwanda, NP</h6>
                            <div className="media mt-4">
                                <LocationOn fontSize="small" style={{ marginTop: 3 }} />
                                <div className="media-body pl-2">
                                    <span>KG 377 St, Rumasha, <br/> Muhini, Gisagara</span>
                                </div>
                            </div>
                            <div className="media mt-3">
                                <MailOutline fontSize="small" style={{ marginTop: 3 }} />
                                <div className="media-body pl-2">
                                    <span>user@domain.com</span>
                                </div>
                            </div>
                            <div className="media mt-3">
                                <Phone fontSize="small" style={{ marginTop: 3 }} />
                                <div className="media-body pl-2">
                                    <span>+250 839 924 329</span>
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

export default Contact;