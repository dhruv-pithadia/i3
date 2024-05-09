import React, { Component } from 'react';
import Header from './header';
import '../static/home.css';
import InvestInIdeas from "../components/investInIdeas.png";
import s1 from "../components/s1.jpg";
import s2 from "../components/s2.jpg";
import s3 from "../components/s3.jpg";
import s4 from "../components/s4.jpg";
import section1 from "../components/section-home-1.png";
import section2 from "../components/section-home-2.png";

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
                    <img src={InvestInIdeas}  className="image" />
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
                    <div className="button-home">
                        <button className='btn-startup'>Register as Startup</button>
                        <button className='btn-investor'>Register as Investor</button>
                    </div>
                    <div class="section">
                        <div class="item">
                            <div class="image-container">
                                <img src={section1} class="image"/>
                            </div>
                            <div class="text-container">
                                <h2>Title 1</h2>
                                <p>Text for Image 1 goes here...</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="text-container">
                                <h2>Title 2</h2>
                                <p>Text for Image 2 goes here...</p>
                            </div>
                            <div class="image-container">
                                <img src={section2} class="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
