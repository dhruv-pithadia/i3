import React from 'react';
import Header from './header';
import Footer from './footer';
import { Container } from 'react-bootstrap';

const AboutUs = () => {

    return (
        <div className="about-main">
            <Header />
            <div className="about-sub-main">
                <Container className='first-section'>

                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
