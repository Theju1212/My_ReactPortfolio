// src/components/Internship.jsx
import React from 'react';
import './Internship.css';

const internships = [
  {
    role: 'Team Leader Intern',
    company: 'SURE Trust (AICTE)',
    duration: 'Dec 2024 – May 2025',
    description:
      'Worked on the MERN-based Education Platform project. Gained hands-on experience in React.js, Express.js, Node.js, MongoDB, Postman, and JavaScript while leading a team of developers.'
  },
  {
    role: 'Web Development Intern',
    company: 'Internshala (via InternZLearn)',
    duration: 'Mar 2025 – Jun 2025',
    description:
      'Completed a web development internship where I learned and applied front-end technologies like HTML, CSS, JavaScript, and React.js by building real-time mini projects.'
  }
];

const Internship = () => {
  return (
    <section className="internship-section" id="internship">
      <h2>💼 Internship Experience</h2>
      <div className="internship-list">
        {internships.map((item, index) => (
          <div className="intern-card" key={index}>
            <h3>{item.role}</h3>
            <p><strong>Organization:</strong> {item.company}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
