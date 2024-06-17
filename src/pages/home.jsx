import React, { Component } from 'react';
import Header from './header';
import '../static/home.css';
import InvestInIdeas from "../components/investInIdeas.png";
import s1 from "../components/s1.jpg";
import s2 from "../components/s2.jpg";
import s3 from "../components/s3.jpg";
import s4 from "../components/s4.jpg";
import section1 from "../components/section-home-1.png";
import Footer from './footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            images: [s1, s2, s3, s4],
            intervalId: null
        };
    }

    componentDidMount() {
        let intervalId = setInterval(this.nextSlide, 5000); // Change image every 5000 milliseconds (5 seconds)
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    nextSlide = () => {
        const { currentIndex, images } = this.state;
        const newIndex = (currentIndex + 1) % images.length;
        this.setState({ currentIndex: newIndex });
    }

    prevSlide = () => {
        const { currentIndex, images } = this.state;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        this.setState({ currentIndex: newIndex });
    }

    render() {
        const { currentIndex, images } = this.state;
        return (
            <div className="home-main">
                <Header />
                <div className="home-sub-main">
                    <img src={InvestInIdeas} className="image" alt='' />
                    <div className="carousel-container">
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
                        <div className="carousel-arrow left-arrow" onClick={this.prevSlide}>&#10094;</div>
                        <div className="carousel-arrow right-arrow" onClick={this.nextSlide}>&#10095;</div>
                    </div>
                    <div className="button-home">
                        <button className='btn-startup'>Register as Startup</button>
                        <button className='btn-investor'>Register as Investor</button>
                    </div>
                    <div className="section">
                        <div className="item">
                            <div className="image-container">
                                <img src={section1} className="image" alt=''/>
                            </div>
                            <div className="text-container">
                                <p>Invest in the Most Promising Startups</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
