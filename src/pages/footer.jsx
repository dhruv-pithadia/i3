import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="sub-main-footer">
                    <nav className='footer-nav'>
                        <ul className='footer-ul'>
                        <li className='footer li'><Link to='/about-us'>About-Us</Link></li>
                            <li><Link to='/contact-us'>Contact-Us</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/tos'>TOS</Link></li>
                            <li><Link to='/provacypolicy'>Privacy Policy</Link></li>
                        </ul>
                        <div class="social-media">
                                <a href="https://www.instagram.com/your_instagram_username"><li><FaInstagram /></li></a>
                                <a href="https://wa.me/your_phone_number"><li><FaWhatsapp /></li></a>
                                <a href="https://www.linkedin.com/in/your_linkedin_profile"><li><FaLinkedinIn /></li></a>
                        </div>
                        <p className='rights-footer'>@2023 i3 All Rights Reserved</p>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Footer;
