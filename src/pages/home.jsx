import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../static/home.css';
import s1 from "../components/s1.jpg";
import s2 from "../components/s2.jpg";
import s3 from "../components/s3.jpg";
import s4 from "../components/s4.jpg";
import introImg from "../components/intro-img.png"
import DedicatedCardImg from "../components/section-home-2.png"
import Footer from './footer';
import { Accordion, AccordionBody, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images] = useState([s1, s2, s3, s4]);
    const [intervalId, setIntervalId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const id = setInterval(nextSlide, 5000); // Change image every 5000 milliseconds (5 seconds)
        setIntervalId(id);

        return () => clearInterval(id); // Cleanup interval on component unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleStartupClick = () => {
        navigate('/startups');
    };

    const handleInvestorClick = () => {
        navigate('/investors');
    };

    return (
        <main>
            <div className="home-main">
                <Header />
                <div className="home-sub-main">
                    {/* <div className="carousel-container">
                        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="Slideshow Image"
                                    className="slide"
                                />
                            ))}
                        </div>
                        <div className="carousel-arrow left-arrow" onClick={prevSlide}>&#10094;</div>
                        <div className="carousel-arrow right-arrow" onClick={nextSlide}>&#10095;</div>
                    </div> */}
                    <div className="banner-home">
                        <div className="banner-sub-home">
                            <p>Invest In Ideas</p>
                        </div>
                        <div className="button-home">
                            <button className='btn-startup' onClick={handleStartupClick}>Register as Startup</button>
                            <button className='btn-investor' onClick={handleInvestorClick}>Register as Investor</button>
                        </div>
                    </div>


                    <section className='Intro-Text-With-Img'>
                        <div className="intro-text-img">
                            <div className="intro-text">
                                <h5>Who We Are</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas
                                    rem accusamus quam porro doloremque rerum minus magnam nihil incidunt odit in nam
                                    recusandae commodi nemo, quasi quas aliquam voluptatibus cumque! Vero quo alias in!
                                    Officiis minus veritatis aliquid magni consectetur? Odio recusandae id repellendus
                                    facilis atque alias voluptatum explicabo?doloremque rerum minus magnam nihil incidunt odit in nam
                                    recusandae commodi nemo, quasi quas aliquam voluptatibus cumque! Vero quo alias in!
                                    Officiis minus veritatis aliquid magni consectetur? Odio recusandae id repellendus
                                    facilis atque alias voluptatum explicabo?</p>
                            </div>
                            <div className="intro-img">
                                <img src={introImg} alt="" />
                            </div>
                        </div>
                    </section>

                    <Container>
                        <Row className='mt-5'>
                            <Col>
                                <div className="dedicated-heading">
                                    <h5>Dedicated to You</h5>
                                    <h2>Our Priorities</h2></div>
                            </Col>
                            <div className="dedicated">
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ab?</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ab?</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ab?</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ab?</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ab?</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ab?</p>
                                </div>
                            </div>


                        </Row>
                    </Container>


                    <Container fluid="md">
                        <Row className='mt-5'>
                            <Col>
                                <h1>FAQs</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <Accordion className='mt-5'>
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header>
                                            Accordion 1
                                        </Accordion.Header>
                                        <AccordionBody>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex.
                                        </AccordionBody>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='1'>
                                        <Accordion.Header>
                                            Accordion 2
                                        </Accordion.Header>
                                        <AccordionBody>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex.
                                        </AccordionBody>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header>
                                            Accordion 3
                                        </Accordion.Header>
                                        <AccordionBody>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex.
                                        </AccordionBody>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='3'>
                                        <Accordion.Header>
                                            Accordion 4
                                        </Accordion.Header>
                                        <AccordionBody>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex.
                                        </AccordionBody>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='4'>
                                        <Accordion.Header>
                                            Accordion 5
                                        </Accordion.Header>
                                        <AccordionBody>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex.
                                        </AccordionBody>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='5'>
                                        <Accordion.Header>
                                            Accordion 6
                                        </Accordion.Header>
                                        <AccordionBody>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex.
                                        </AccordionBody>
                                    </Accordion.Item>

                                </Accordion>
                            </Col>
                        </Row>
                    </Container>



                </div>
                <Footer />
            </div>
        </main>
    );
};

export default Home;
