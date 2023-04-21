import React from 'react';

import data from '../../assets/data.jpeg';
import './header.css';

const Header = () => (
  <div className="data__header section__padding" id="home">
    
    <div className="data__header-image">
      <img src={data} />
    </div>
    
    <div className="data__header-content">
      <h1 className="gradient__text">ABOUT US</h1>
      <p>We are passionate about data analysis and artificial intelligence. Our company is a combination of ideas and new technologies, mixing the best experienced analysts and engineers. All our Board members have PhD or MSc degrees. Our experts and top management have accumulated many years of analytics experience either in the private or public companies.</p>
      <p>Why Star Consulting? For a background read on the history and origins of our team.</p>
    </div>

    
  </div>
);

export default Header;