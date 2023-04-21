import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatwedo.css';

const Whatwedo = () => (
  <div className="data__whatwe section__margin" id="wgpt3">
    <div className="data__whatwe-feature">
      <Feature title="What We Do" text="Star consulting is a global consultancy company with offices in USA, UK and Australia. We help private companies and banks in analyzing data. We work with different companies operating in multiple sectors. Our clients comprise: banks, hotels, real estate agencies as well as some of the most upcoming financial start-ups." />
    </div>
    <div className="data__whatwe-heading">
      <h1 className="gradient__text">The possibilities are everywhere</h1>
    </div>
    <div className="data__whatwe-container">
      <Feature title="Open Banking" text="Data can be turned into actionable insights that enable companies to improve their performance and provide a better and more personalised customer experience. In turn, enhanced customer experience is likely to further encourage consumers to share data.This is the virtuous circle of Open Banking." />
      <Feature title="Data and Innovation" text="Improved business performance translates as the ability to drastically improve the accuracy of models and deliver a more convenient and personalised customer experience, which is of paramount importance in an increasingly digital world." />
      <Feature title="Identity and Fraud" text="Increasingly sophisticated online fraud attacks can only be stopped by using superior technology. By combing our custom AI-driven Machine Learning models, we have created a powerful fraud prevention solution called Giperion." />
      <Feature title="Debt Defence" text="Our effective system covers the preventive and very early collections phase within the customer life cycle. It allows businesses to proactively identify and contact customers who are up-to-date or have just become past due, but that have a high risk of becoming delinquent, or seriously delinquent, in the very near future." />
    </div>
  </div>
);

export default Whatwedo;