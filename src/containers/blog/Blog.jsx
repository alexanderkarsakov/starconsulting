import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="data__blog section__padding" id="blog">
    <div className="data__blog-heading">
      <h1 className="gradient__text">Our news <br /> Latest posts</h1>
    </div>
    <div className="data__blog-container">
      
      <div className="data__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 31, 2023" text="Our revenue generating fraud prevention solutions" />
      </div>
      
      <div className="data__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 30, 2023" text="The power of transactional data from Open Banking" />
        <Article imgUrl={blog03} date="Jan 27, 2023" text="The transformative effect of AI and Machine Learning" />
        <Article imgUrl={blog04} date="Jan 22, 2023" text="Global Insights Report: January 2023" />
        <Article imgUrl={blog05} date="Jan 20, 2023" text="Use of Machine Learning for financial models" />
      </div>

     

    </div>
  </div>
);

export default Blog;