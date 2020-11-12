import React from 'react';
import Heading from './common/heading';

import './css/blog.css';

const Blog = () => {
    return (
        <section className="blogSection my-5">
            <div className="container text-center">
                <Heading title="Our Blog" heading="Latest News" />
                <div className="row mt-5">
                    <div className="col-md-4 my-3">
                        <img src="https://cdn.pixabay.com/photo/2016/11/04/10/12/hospice-1797305_960_720.jpg" className="img-fluid" alt=""/>
                        <div className="card border-0 shadow mx-2" style={{ marginTop: '-4em' }}>
                            <div className="card-body">
                                <span className="text-muted" style={{ fontSize: 14}}>Nov 4 2020</span>
                                <h3><span style={{ color: '#00c853', fontSize: 45}}>.</span> Help The Helpless</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <img src="https://cdn.pixabay.com/photo/2016/11/04/10/12/hospice-1797305_960_720.jpg" className="img-fluid" alt=""/>
                        <div className="card border-0 shadow mx-2" style={{ marginTop: '-4em' }}>
                            <div className="card-body">
                                <span className="text-muted" style={{ fontSize: 14}}>Nov 4 2020</span>
                                <h3><span style={{ color: '#09de90', fontSize: 45}}>.</span> Help The Helpless</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <img src="https://cdn.pixabay.com/photo/2016/11/04/10/12/hospice-1797305_960_720.jpg" className="img-fluid" alt=""/>
                        <div className="card border-0 shadow mx-2" style={{ marginTop: '-4em' }}>
                            <div className="card-body">
                                <span className="text-muted" style={{ fontSize: 14}}>Nov 4 2020</span>
                                <h3><span style={{ color: '#09de90', fontSize: 45}}>.</span> Help The Helpless</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;