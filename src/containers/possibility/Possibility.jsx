import React from 'react';
import possibilityImage from '../../assets/possibility.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="data__possibility section__padding" id="possibility">
    
    <div className="data__possibility-content">
      <h4>Our Approach</h4>
      <h1 className="gradient__text">Our sustainable business priority <br /> Improving financial health for all</h1>
      <p>Our sustainable business strategy aligns with and supports our purpose and business model, helping us add value for our stakeholders. It sets out our approach to our most material environmental, social and governance (ESG) opportunities and risks. We can add the most value to society by improving ﬁnancial health for all, and we have made this our sustainable business strategic priority. Helping people improve their ﬁnancial health enables them to get fairer access to credit and the essentials they need to transform their lives – from having a home or building their business to paying for education and healthcare. This in turn drives social and economic development, contributing to three of the United Nations  Sustainable Development Goals, which include helping to lift people out of poverty. </p>
     
    </div>

    <div className="data__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    
  </div>
);

export default Possibility;