// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-scroll';

// 🧠 Import React Icons
import { AiFillHome } from 'react-icons/ai';
import { FaUser, FaGraduationCap, FaProjectDiagram, FaFileAlt, FaTools } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

import ProjectSelector from './components/ProjectSelector';
import WebProjects from './components/WebProjects';
import DataProjects from './components/DataProjects';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      {/* ✅ Navigation Bar with Icons */}
      <nav style={styles.nav}>
        <Link style={styles.link} to="home" smooth={true} duration={500}><AiFillHome style={styles.icon} />Home</Link>
        <Link style={styles.link} to="about" smooth={true} duration={500}><FaUser style={styles.icon} />About</Link>
        <Link style={styles.link} to="education" smooth={true} duration={500}><FaGraduationCap style={styles.icon} />Education</Link>
        <Link style={styles.link} to="projects" smooth={true} duration={500}><FaProjectDiagram style={styles.icon} />Projects</Link>
        <Link style={styles.link} to="resume" smooth={true} duration={500}><FaFileAlt style={styles.icon} />Resume</Link>
        <Link style={styles.link} to="skills" smooth={true} duration={500}><FaTools style={styles.icon} />Skills</Link>
        <Link style={styles.link} to="contact" smooth={true} duration={500}><MdContactMail style={styles.icon} />Contact</Link>
      </nav>

      {/* ✅ Main Sections */}
      <Home />
      <About />
      <Education />

      {/* ✅ Projects Section */}
      <section id="projects">
        <div style={{ padding: '2rem', color: '#fff', background: '#0F172A', minHeight: '100vh', textAlign: 'center' }}>
          {!selectedCategory ? (
            <ProjectSelector onSelectCategory={setSelectedCategory} />
          ) : (
            <>
              <h2>Showing: {selectedCategory} Projects</h2>

              {selectedCategory === 'Web Development' && <WebProjects />}
              {selectedCategory === 'Data Analytics' && <DataProjects />}

              <button
                style={{
                  marginTop: '2rem',
                  padding: '0.6rem 1.2rem',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#22D3EE',
                  color: '#0F172A',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedCategory('')}
              >
                🔙 Back to Categories
              </button>
            </>
          )}
        </div>
      </section>

      <Resume />
      <Skills />

      <section id="more-info">
        <Certifications />
        <Internship />
        <Achievements />
      </section>

      <Contact />
    </div>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#222",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    zIndex: 1000
  },
  link: {
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: "6px"
  }
};

export default App;
