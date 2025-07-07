// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', image: '/assets/html.png' },
  { name: 'CSS', image: '/assets/css.png' },
  { name: 'JavaScript', image: '/assets/javascript.png' },
  { name: 'React', image: '/assets/react.jpeg' },
  { name: 'MongoDB', image: '/assets/mongodb.png' },
  { name: 'Postman', image: '/assets/postman.png' },
  { name: 'Power BI', image: '/assets/powerbi.png' },
  { name: 'Tableau', image: '/assets/tableau.png' },
  { name: 'Python', image: '/assets/python.jpeg' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p>These are the skills I specialize in:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
