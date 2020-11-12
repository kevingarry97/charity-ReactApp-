import React from 'react';
import Blog from '../blog';
import Donation from '../donation';
import Events from '../events';
import Footer from '../footer';
import Intro from '../intro';
import Mission from '../mission';
import Navbar from '../navbar';
import Raising from '../raising';
import Services from '../services';
import Volunteer from '../volunteer';

function Home(props) {
    return (
        <>
            <Navbar />
            <main>
                <Intro />
                <Services />
                <Mission />
                <Raising />
                <Events />
                <Donation />
                <Blog />
                <Volunteer />
                <Footer />
            </main>
        </>
    );
}

export default Home;