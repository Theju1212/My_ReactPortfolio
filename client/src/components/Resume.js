// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>
      <p>Download my resume to know more about my qualifications and experience.</p>
      <a href="/Resume.pdf" download className="download-btn">Download Resume</a>

      {/* Optional Preview */}
      <iframe
        src="/Resume.pdf"
        title="Tejaswini Resume"
        width="100%"
        height="500px"
        className="resume-preview"
      />
    </section>
  );
};

export default Resume;
