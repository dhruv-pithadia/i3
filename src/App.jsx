import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './pages/header';
import Startups from './pages/startups';
import Investors from './pages/investors';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import SignIn from './pages/sign-in';
import Faq from './footer/faq';
import Tos from './footer/tos';
import Privacypolicy from './footer/privacypolicy';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/startups" element={<Startups />}></Route>
           <Route path="/investors" element={<Investors />}></Route>
           <Route path="/about-us" element={<AboutUs/>}></Route>
           <Route path="/contact-us" element={<ContactUs/>}></Route>
           <Route path="/sign-in" element={<SignIn/>}></Route>
           <Route path="/faq" element={<Faq/>}></Route>
           <Route path="/tos" element={<Tos/>}></Route>
           <Route path="/provacypolicy" element={<Privacypolicy/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
