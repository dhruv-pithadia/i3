import React, { Component } from 'react';
import Header from './header';
import '../static/home.css';
import InvestInIdeas from "../components/investInIdeas.png"

class Home extends Component {
    render() {
        return (
            <div className="home-main">
                <Header/>
                <div className="home-sub-main">
                    <img src={InvestInIdeas
                    } alt="Description of the image" className="image" />                      <div className="slieshow">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
