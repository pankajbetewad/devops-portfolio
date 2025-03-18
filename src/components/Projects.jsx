import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented a CI/CD pipeline using Jenkins and Docker.",
      link: "#"
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Deployed scalable infrastructure on AWS using Terraform.",
      link: "#"
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;