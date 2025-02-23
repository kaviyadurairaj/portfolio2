import React from "react";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-card">
        <img src="./images/portfolio.png" alt="Portfolio Website" className="project-image" width="50px" height="50px" />
        <h3>Portfolio Website</h3>
        <p>Developed a responsive and interactive personal portfolio website to showcase projects, skills, and achievements.</p>
      </div>
      <div className="project-card">
        <img src="./images/register.jpg" alt="Student Registration Page" className="project-image" width="50px" height="50px" />
        <h3>Student Registration Page</h3>
        <p>Created a basic web page for student registration to collect user information.</p>
      </div>
    </section>
  );
};

export default Projects;
