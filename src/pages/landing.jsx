import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../static/landing.css";
import Header from './header';
import Footer from './footer';

const Landing = () => {
    const navigate = useNavigate();

    const goToStartupPage = () => {
        navigate('/startups');
    }

    const goToInvestorPage = () => {
        navigate('/investors');
    }

    return (
        <div className="landing-main">
            <Header />
            <div className="hero-section">
                <h1 className="hero-heading">Empowering Businesses & Investors</h1>
                <p className="hero-subtext">Connect with the right opportunities to grow your business or make smart investments.</p>
                <div className="landing-cards">
                    <div className="landing-card landing-card-1" onClick={goToStartupPage}>
                        <h2>Looking for an Investor</h2>
                        <p>Find investors who believe in your vision and take your business to new heights.</p>
                        <button className="cta-button">Get Started</button>
                    </div>
                    <div className="landing-card landing-card-2" onClick={goToInvestorPage}>
                        <h2>Want to Invest</h2>
                        <p>Explore lucrative opportunities and become a part of successful ventures.</p>
                        <button className="cta-button">Learn More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;