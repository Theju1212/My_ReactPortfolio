import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', image: `${process.env.PUBLIC_URL}/assets/html.png` },
  { name: 'CSS', image: `${process.env.PUBLIC_URL}/assets/css.png` },
  { name: 'JavaScript', image: `${process.env.PUBLIC_URL}/assets/javascript.png` },
  { name: 'React', image: `${process.env.PUBLIC_URL}/assets/react.jpeg` },
  { name: 'MongoDB', image: `${process.env.PUBLIC_URL}/assets/mongodb.png` },
  { name: 'Postman', image: `${process.env.PUBLIC_URL}/assets/postman.png` },
  { name: 'Power BI', image: `${process.env.PUBLIC_URL}/assets/powerbi.png` },
  { name: 'Tableau', image: `${process.env.PUBLIC_URL}/assets/tableau.png` },
  { name: 'Python', image: `${process.env.PUBLIC_URL}/assets/python.jpeg` },
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
