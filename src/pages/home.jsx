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
import Card from 'react-bootstrap/Card';
import support from "../components/support.png";
import who from "../components/who.svg"
import people from "../components/people.svg"
import shield from "../components/shield-check.svg"



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
                    <div className="banner-home first-section">
                        <div className="banner-sub-home text-center">
                            <p>Invest In Ideas</p>
                        </div>
                        <div className="button-home">
                            <button className='btn-startup' onClick={handleStartupClick}>Register as Startup</button>
                            <button className='btn-investor' onClick={handleInvestorClick}>Register as Investor</button>
                        </div>
                    </div>

                    <Container fluid="md">
                        <Row className='intro-para-row d-flex mt-5'>
                            <Col>
                                <div className="intro-text">
                                    <h5>Who We Are</h5>
                                    <p>Welcome to i3 - Invest in Ideas, a dynamic platform dedicated to bridging the gap between innovative startups and visionary investors.
                                        At i3, we believe that every groundbreaking idea deserves a chance to shine. Our mission is to create an ecosystem where entrepreneurs can
                                        showcase their unique projects and connect with investors who are passionate about nurturing and growing new ventures.
                                        By providing a seamless and engaging environment for pitching and investing, i3 empowers startups to turn their ideas into reality while
                                        offering investors the opportunity to be part of the next big success story. Join us in revolutionizing the way ideas are discovered and funded.</p>
                                </div>
                            </Col>
                            <Col><div className="intro-img">
                                <img src={who} alt="" />
                            </div></Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className='mt-5'>
                            <Col>
                                <div className="dedicated-heading">
                                    <h5>Dedicated to You</h5>
                                    <h2>Our Priorities</h2></div>
                            </Col>
                            <div className="dedicated">
                                <div className="card-dedicated">
                                    <img src={people} alt="" />
                                    <h5>User Experience</h5>
                                    <p>We prioritize creating a seamless and intuitive experience for both startups and investors.

                                    </p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={shield} alt="" />
                                    <h5>Security and Privacy</h5>
                                    <p>Protecting your data and transactions is our top priority.</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Quality Control and Verification</h5>
                                    <p>We are dedicated to maintaining a high standard of integrity and credibility.</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Scalability and Performance</h5>
                                    <p>As we grow, our platform is built to scale seamlessly.</p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Customer Support and Engagement</h5>
                                    <p>Exceptional customer support is at the heart of what we do. </p>
                                </div>
                                <div className="card-dedicated">
                                    <img src={DedicatedCardImg} alt="" />
                                    <h5>Matching and Filtering Algorithms:</h5>
                                    <p>Our advanced algorithms are designed to connect startups with the right investors.</p>
                                </div>
                            </div>


                        </Row>
                    </Container>

                    <Container fluid="md mt-5" className='assistance-cards'>
                        <Row>
                            <h2 className='text-center'>Assistance & Support</h2>
                        </Row>
                        <Col className='d-flex justify-content-evenly mt-4'>

                            <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center' }}>
                                <Card.Img variant="top" src={people} className='p-2' />
                                <Card.Body>
                                    <Card.Title>Personalized Assistance</Card.Title>
                                    <Card.Text>
                                        Receive tailored support from our experts who are ready to provide solutions and advice based on your specific needs and situation.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={support} className='p-2' />
                                <Card.Body>
                                    <Card.Title>Comprehensive Help Center</Card.Title>
                                    <Card.Text>
                                        Access a wealth of resources, including FAQs, guides, and troubleshooting tips, to find answers to common queries and solve problems independently.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={support} className='p-2' />
                                <Card.Body>
                                    <Card.Title>24/7 Support</Card.Title>
                                    <Card.Text>
                                        Our dedicated support team is available around the clock to assist with any issues or questions you may have, ensuring you always have the help you need.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>

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
