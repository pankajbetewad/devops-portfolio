import React from 'react';

const Skills = () => {
  const skills = [
    "AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "CI/CD", "Linux", "Python", "Ansible"
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;