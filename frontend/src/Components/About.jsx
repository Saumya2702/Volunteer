import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          We are a dedicated platform empowering individuals and organizations to make a tangible difference through fundraising campaigns. Our mission is to connect passionate advocates with generous donors, unlocking the potential for positive change. By supporting our campaigns, you become an integral part of the journey, enabling impactful projects and initiatives to flourish. Your contributions empower us to create a brighter future for communities and individuals in need.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;