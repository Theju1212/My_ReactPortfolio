// src/components/About.jsx
import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Thejaswini, a passionate frontend developer with a love for building responsive,
              user-friendly web applications. I enjoy learning new technologies and solving real-world
              problems using clean and scalable code.
            </p>
            <p>
              Apart from coding, I enjoy public speaking, analyzing data trends, and mentoring fellow learners.
              I'm currently focused on full-stack development using React, Node.js, and MongoDB.
            </p>
          </div>
          <div className="about-highlights">
            <ul>
              <li>💻 Frontend: React, HTML, CSS, JS</li>
              <li>🛠️ Backend: Node.js, Express</li>
              <li>📊 Tools: Git, GitHub, MongoDB</li>
              <li>🎤 Public Speaker & Mentor</li>
            </ul>
          </div>
        </div>

        {/* ✅ Know More Button */}
        <div className="know-more-button" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="more-info" smooth={true} duration={500}>
            <button style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: '#22D3EE',
              color: '#0F172A',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              👩‍💼 Know More About Me
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
