import React, { Component } from 'react';
import Header from './header';
import '../static/home.css';
import InvestInIdeas from "../components/investInIdeas.png";
import s1 from "../components/s1.jpg";
import s2 from "../components/s2.jpg";
import s3 from "../components/s3.jpg";
import s4 from "../components/s4.jpg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1,
            images: [s1, s2, s3, s4]
        };
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
                <Header/>
                <div className="home-sub-main">
                    <img src={InvestInIdeas} alt="Invest in Ideas" className="image" />
                    <div className="slideshow-container">
                        <div className="slideshow" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="Slideshow Image"
                                    className="slide"
                                />
                            ))}
                        </div>
                        {/* <div className="arrow left-arrow" onClick={this.prevSlide}>{"<"}</div>
                        <div className="arrow right-arrow" onClick={this.nextSlide}>{">"}</div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
