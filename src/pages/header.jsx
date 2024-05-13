// import React, { Component, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { TfiMenu } from "react-icons/tfi";
// import { MdOutlineCancel } from "react-icons/md";
// import "../static/header.css"
// function Header() {
//         const navref = useRef();
//         const shownavbar = () => {
//             navref.current.classList.toggle("responsive_nav")
//         }
//         return (
//             <header>
//                 <div className="logo">i3</div>
//                 <nav ref={navref}>
//                     <ul>
//                         <li><Link to='/'>Home</Link></li>
//                         <li><Link to='/startups'>Startups</Link></li>
//                         <li><Link to='/investors'>Investors</Link></li>
//                         <li><Link to='/about-us'>About-Us</Link></li>
//                         <li><Link to='/contact-us'>Contact-Us</Link></li>
//                         <li><Link to='/sign-in' className="signin-button">Sign In</Link></li>
//                         <button className='menu-button menu-cancel' onClick={shownavbar}>
//                             <MdOutlineCancel />
//                         </button>
//                     </ul>
//                 </nav>
//                 <button className='menu-button'onClick={shownavbar}>
//                     <TfiMenu />
//                 </button>
//             </header>
//         );
// }

// export default Header;

import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import "../static/header.css"

function Header() {
    const navref = useRef();
    const shownavbar = () => {
        navref.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <div className="logo">i3</div>
            <nav className="header-nav" ref={navref}>
                <ul className="header-ul">
                    <li className="header-li"><Link to='/'>Home</Link></li>
                    <li className="header-li"><Link to='/startups'>Startups</Link></li>
                    <li className="header-li"><Link to='/investors'>Investors</Link></li>
                    <li className="header-li"><Link to='/about-us'>About-Us</Link></li>
                    <li className="header-li"><Link to='/contact-us'>Contact-Us</Link></li>
                    <li className="header-li"><Link to='/sign-in' className="signin-button">Sign In</Link></li>
                    <button className='menu-button menu-cancel' onClick={shownavbar}>
                        <MdOutlineCancel />
                    </button>
                </ul>
            </nav>
            <button className='menu-button' onClick={shownavbar}>
                <TfiMenu />
            </button>
        </header>
    );
}

export default Header;
