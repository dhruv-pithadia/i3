import React from 'react';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/startups.css';
import { Container, Row, Col } from 'react-bootstrap';

const Startups = () => {

    return (
        <main>
            <div className="startup-main">
                <Header />
                <div className="startup-sub-main">


                    <Row className='startups text-center'>
                        <Col>
                            <div className="banner d-flex justify-content-center align-items-center">
                                <div className="banner-text">
                                    <h1>Startups</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
                <Footer />
            </div>
        </main>
    );
}


export default Startups;
