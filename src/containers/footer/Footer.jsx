import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="data__footer section__padding">
    <div className="data__footer-heading">
      <h2 className="gradient__text">We love to share insights we discover, our expert knowledge and opinions on the latest trends so we can help businesses grow.</h2>
    </div>

    <div className="data__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="data__footer-links">
      <div className="data__footer-links_logo">
        <p>Registered office address:  <br /> The Empire Building,
        <br />Consulting Way, Business Area, <br /> Paris 9988.
        </p>

      </div>
      <div className="data__footer-links_div">
        <h4>Links</h4>
        <p>Downloads</p>
        <p>Social Media</p>
        <p>Global Offices</p>
        <p>Contact Us</p>
      </div>
      <div className="data__footer-links_div">
        <h4>Company</h4>
        <p>Privacy Policy  </p>
        <p>Cookies information</p>
        <p>Terms of use</p>
      </div>
      <div className="data__footer-links_div">
        <h4>Contact us</h4>
        <p>019-98989123</p>
        <p>mail@info.net</p>
      </div>
    </div>

    <div className="data__footer-copyright">
      <p>@2023 Star Consulting</p>
    </div>
  </div>
);

export default Footer;