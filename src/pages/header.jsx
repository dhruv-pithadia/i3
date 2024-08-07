import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import "../static/header.css";

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const firstSection = document.querySelector('.first-section');

            if (window.scrollY > 0) {
                header.classList.add('glass');
            } else {
                header.classList.remove('glass');
            }

            if (firstSection) {
                const firstSectionHeight = firstSection.offsetHeight;
                if (window.scrollY > firstSectionHeight) {
                    header.classList.add('scrolled-past');
                } else {
                    header.classList.remove('scrolled-past');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="logo">i3</div>
            <nav className="header-nav" ref={navRef}>
                <ul className="header-ul">
                    <li className="header-li"><Link to='/'>Home</Link></li>
                    <li className="header-li"><Link to='/startups'>Startups</Link></li>
                    <li className="header-li"><Link to='/investors'>Investors</Link></li>
                    <li className="header-li"><Link to='/about-us'>About-Us</Link></li>
                    <li className="header-li"><Link to='/contact-us'>Contact-Us</Link></li>
                    <li className="header-li"><Link to='/sign-in' className="signin-button">Sign In</Link></li>
                    <button className='menu-button menu-cancel' onClick={showNavbar}>
                        <MdOutlineCancel />
                    </button>
                </ul>
            </nav>
            <button className='menu-button' onClick={showNavbar}>
                <TfiMenu />
            </button>
        </header>
    );
}

export default Header;
