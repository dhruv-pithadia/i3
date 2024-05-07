import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../static/header.css"
class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">i3</div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/startups'>Startups</Link></li>
                        <li><Link to='/investors'>Investors</Link></li>
                        <li><Link to='/about-us'>About-Us</Link></li>
                        <li><Link to='/contact-us'>Contact-Us</Link></li>
                        <li><Link to='/sign-in' className="signin-button">Sign In</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
