import React from 'react';
import './about.css'; // Import the CSS file

const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <img
          className="mainImg"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg"
          alt="Our Mission"
        />
        <div className="allText aboveText">
          <h2 className="text-blk headingText">Our Mission</h2>
          <h4 className="text-blk subHeadingText">To provide a User-friendly and Good Environment for the Users</h4>
          <p className="text-blk description">
            At To-do, our mission is to empower individuals and teams to achieve their goals by providing a simple,
            efficient, and intuitive task management tool. We believe in the power of organization and the positive impact
            it has on productivity and overall well-being. Our goal is to help users stay focused, organized, and on track
            to accomplish more every day.
          </p>
          <button className="explore">Explore</button>
        </div>
      </div>
      
      <div className="responsive-container-block Container bottomContainer">
        <img
          className="mainImg"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg"
          alt="Our Vision"
        />
        <div className="allText bottomText">
          <h2 className="text-blk headingText">Our Vision</h2>
          <h4 className="text-blk subHeadingText">"The secret of getting ahead is getting started." - Mark Twain</h4>
          <p className="text-blk description">
            Our vision is to become the leading task management solution recognized for its user-friendly interface,
            innovative features, and exceptional customer support. We envision a world where everyone can easily manage
            their tasks and collaborate seamlessly, leading to greater productivity and a balanced life. We strive to
            continuously evolve and improve our application to meet the changing needs of our users and stay ahead in the
            realm of task management.
          </p>
          <button className="explore">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default About;
