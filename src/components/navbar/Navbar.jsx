import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="data__navbar">
      <div className="data__navbar-links">
        <div className="data__navbar-links_logo">
          
        </div>
        <div className="data__navbar-links_container">
          <p><a href="#aboutus">About us</a></p>
          <p><a href="#whatwedo">What we do</a></p>
          <p><a href="#features">Our products</a></p>
          <p><a href="#possibility">Our approach</a></p>
          <p><a href="#blog">News</a></p>
        </div>
      </div>
      <div className="data__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="data__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="data__navbar-menu_container scale-up-center">
          <div className="data__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="data__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;