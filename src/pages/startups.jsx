import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/startups.css';
import { Container, Row, Col, FormControl, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Startups = () => {
    const [formVisible, setFormVisible] = useState(false);

    const handleReset = () => {
        document.getElementById("startupForm").reset();
    };

    const handleSignUpClick = () => {
        setFormVisible(true);
    };

    return (
        <main id='startups-main'>
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

                    {/* Introductory Section */}

                    <Row className='intro-startup mt-5 text-center'>
                        <Col>
                            <h2>Welcome to i3</h2>
                            <p>Connecting startups with investors to help them achieve great heights. <br />Register now to find the perfect match for your business needs.</p>
                        </Col>


                        {/* <div className="wave-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 320">
                                <path fill="#0D2A56" fillOpacity="0.3" d="M0,96L60,117.3C120,139,240,181,360,192C480,203,600,181,720,144C840,107,960,53,1080,69.3C1200,85,1320,171,1380,213.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                            </svg>
                        </div> */}
                    </Row>



                    {/* Features Section */}
                    <Container fluid="md" className='features'>
                        <Row className="text-center">
                            <Col>
                                <h2>Why Choose Us?</h2>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Extensive Network</Card.Title>
                                        <Card.Text>We have a wide network of investors and startups to ensure the best matches.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Secure Platform</Card.Title>
                                        <Card.Text>Your data and transactions are secure with our advanced security measures.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Expert Support</Card.Title>
                                        <Card.Text>Our team provides expert support to help you through every step of the process.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    {/* Testimonials Section */}
                    <Container fluid="md" className='testimonials mt-5'>
                        <Row className="text-center">
                            <Col>
                                <h2>Testimonials</h2>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>"This platform connected us with the perfect investors for our startup. Highly recommend!"</Card.Text>
                                        <Card.Footer>- Startup Founder</Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>"We found some amazing investment opportunities here. Great experience!"</Card.Text>
                                        <Card.Footer>- Investor</Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>"The platform is user-friendly and the support team is fantastic."</Card.Text>
                                        <Card.Footer>- Entrepreneur</Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    {/* Call-to-Action Banner */}
                    <Container fluid="md" className='sign-up mt-5 text-center'>
                        <Row>
                            <Col>
                                <h2>Ready to Get Started?</h2>
                                <p>Join our platform today and take your startup to the next level.</p>
                                <Button variant="primary" size="lg" onClick={handleSignUpClick}>Sign Up Now</Button>
                            </Col>
                        </Row>
                    </Container>

                    {/* Form Section */}
                    {formVisible && (
                        <Container fluid="md" className='mt-5'>
                            <Row>
                                <Form id='startupForm'>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label>Startup Name</Form.Label>
                                            <Form.Control type="text"
                                                placeholder="Startup Name"
                                                pattern="[A-Za-z0-9]+"
                                                title="Only alphabets and numbers are allowed"
                                                required />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                required />
                                        </Form.Group>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Form.Group as={Col} controlId="formGridContact">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Contact Number"
                                                pattern="[0-9]+"
                                                title="Only numbers are allowed"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password"
                                                required />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St"
                                            required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control required />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Arunachal Pradesh</option>
                                                <option>Assam</option>
                                                <option>Bihar</option>
                                                <option>Chhattisgarh</option>
                                                <option>Goa</option>
                                                <option>Gujarat</option>
                                                <option>Haryana</option>
                                                <option>Himachal Pradesh</option>
                                                <option>Jharkhand</option>
                                                <option>Karnataka</option>
                                                <option>Kerala</option>
                                                <option>Madhya Pradesh</option>
                                                <option>Maharashtra</option>
                                                <option>Manipur</option>
                                                <option>Meghalaya</option>
                                                <option>Mizoram</option>
                                                <option>Nagaland</option>
                                                <option>Odisha</option>
                                                <option>Punjab</option>
                                                <option>Rajasthan</option>
                                                <option>Sikkim</option>
                                                <option>Tamil Nadu</option>
                                                <option>Telangana</option>
                                                <option>Tripura</option>
                                                <option>Uttar Pradesh</option>
                                                <option>Uttarakhand</option>
                                                <option>West Bengal</option>
                                                <option>Andaman and Nicobar Islands</option>
                                                <option>Chandigarh</option>
                                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                                <option>Delhi</option>
                                                <option>Lakshadweep</option>
                                                <option>Puducherry</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control required />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button variant="secondary" className="m-3" onClick={handleReset}>
                                        Reset
                                    </Button>
                                </Form>
                            </Row>
                        </Container>
                    )}
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default Startups;