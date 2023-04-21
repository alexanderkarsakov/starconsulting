import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Data Collection',
    text: 'Depending on your objectives our team of experts will draft a questionnaire and/or advise you on how to gather the relevant data. We can also collect data on your behalf, get in touch to explore the different solutions we offer.',
  },
  {
    title: 'Data Processing',
    text: 'After the relevant data has been collected our team of statisticians will process, organize and get the data ready for analysis.',
  },
  {
    title: 'Data Analysis',
    text: 'Depending on the nature and the purpose of the analysis a set of statistical methodologies will be applied in order to extract the required information. This information will be presented to the final user with a report and/or presentation.',
  },
];

const Features = () => (
  <div className="data__features section__padding" id="features">
    <div className="data__features-heading">
      <h1 className="gradient__text">OUR PRODUCTS</h1>
      
    </div>
    <div className="data__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;