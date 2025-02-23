import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <section className="home">
      <h1>Hi, I'm Kaviya D</h1>
      <div className="profile-container">
        <img src="./images/profile.jpeg" alt="Kaviya D" className="profile-image" />
        
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            I intend to build a career with a leading corporate where I can
            withstand and further enhance my knowledge. Motivated student eager to
            apply classroom knowledge to real-world experiences, with a strong
            willingness to learn and contribute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
