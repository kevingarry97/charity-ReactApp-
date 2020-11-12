import React from 'react';
import Heading from './common/heading';

const Events = () => {
    return (
        <section className="eventSection py-5 bg-light">
            <div className="container">
                <Heading title="Our Events" heading="Upcoming Events" className="text-center" />
                <div className="row my-5">
                    <div className="col-md-4 my-3">
                        <img src="https://cdn.pixabay.com/photo/2016/11/04/10/12/hospice-1797305_960_720.jpg" className="img-fluid" alt=""/>
                        <div className="card border-0 shadow mx-2" style={{ marginTop: '-4em' }}>
                            <div className="card-body">
                                <h5> Education for All Children </h5>
                                <p className="pr-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <a style={{ color: '#00c853', fontWeight: 'bold'}}>Learn more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/20/women-friends-1577910_960_720.jpg" className="img-fluid" alt=""/>
                        <div className="card border-0 shadow mx-2" style={{ marginTop: '-4em' }}>
                            <div className="card-body">
                                <h5> Education for All Children </h5>
                                <p className="pr-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <a style={{ color: '#00c853', fontWeight: 'bold'}}>Learn more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <img src="https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072_960_720.jpg" className="img-fluid" alt=""/>
                        <div className="card border-0 shadow mx-2" style={{ marginTop: '-4em' }}>
                            <div className="card-body">
                                <h5> Education for All Children </h5>
                                <p className="pr-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <a style={{ color: '#00c853', fontWeight: 'bold'}}>Learn more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;