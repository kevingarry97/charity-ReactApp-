import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Add, FavoriteBorder, CheckCircleOutline, EmojiPeople } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import Heading from './common/heading';

const Services = () => {
    return (
        <section className="pb-5 mb-5" style={{ backgroundColor: '#f3f2f2' }}>
            <div className="container text-center">
                <Heading title="What we do?" heading="We Are In A Mission To Help The Helpless" />
                <div className="row my-5">
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="card shadow-sm border-0">
                            <div className="card-body text-center">
                                <Fab style={{ backgroundColor: green['A700'], color: '#fff'}} aria-label="add">
                                    <Add />
                                </Fab>
                                <h5 className="font-weight-bold my-4">Clean Water</h5>
                                <p className="font-weight-normal">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Pariatur minus ex perferendis sapiente provident. A vel,
                                    iure sed dolorum quos voluptas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="card shadow-sm border-0">
                            <div className="card-body text-center">
                                <Fab style={{ backgroundColor: green['A700'], color: '#fff'}} aria-label="add">
                                    <FavoriteBorder />
                                </Fab>
                                <h5 className="font-weight-bold my-4">Caring & Loving</h5>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Pariatur minus ex perferendis sapiente provident. A vel,
                                    iure sed dolorum quos voluptas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="card shadow-sm border-0">
                            <div className="card-body text-center">
                                <Fab style={{ backgroundColor: green['A700'], color: '#fff'}} aria-label="add">
                                    <CheckCircleOutline />
                                </Fab>
                                <h5 className="font-weight-bold my-4">Become friendly</h5>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Pariatur minus ex perferendis sapiente provident. A vel,
                                    iure sed dolorum quos voluptas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="card shadow-sm border-0">
                            <div className="card-body text-center">
                                <Fab style={{ backgroundColor: green['A700'], color: '#fff'}} aria-label="add">
                                    <EmojiPeople />
                                </Fab>
                                <h5 className="font-weight-bold my-4">Helping Hands</h5>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Pariatur minus ex perferendis sapiente provident. A vel,
                                    iure sed dolorum quos voluptas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;