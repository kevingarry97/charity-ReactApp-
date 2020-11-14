import React from 'react';
import Donate from './common/donate';
import Heading from './common/heading';
import fatherHood from '../assets/images/fatherHood.svg';

const Mission = (props) => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 pt-3">
                        <Heading title="What we do?" heading="We Are In A Mission To Help The Helpless" />
                        <p className="text-muted pt-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Consectetur, cupiditate. Itaque, modi? Voluptatem laudantium est ipsa
                            aliquid deserunt maxime harum, accusantium saepe dolorem,
                            culpa officiis ipsam, inventore fuga facilis dolor.
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            <br/>
                            <br/>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Consectetur, cupiditate. Itaque, modi? Voluptatem laudantium est ipsa
                            aliquid deserunt maxime harum, accusantium saepe dolorem,
                            culpa officiis ipsam, inventore fuga facilis dolor.
                        </p>
                        <Donate />
                    </div>
                    <div className="col-md-4 offset-md-1 mt-5">
                        <img src={fatherHood} className="img-fluid mt-md-5" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;