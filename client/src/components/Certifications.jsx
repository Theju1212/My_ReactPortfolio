// src/components/Certifications.jsx
import React from 'react';
import './Certifications.css';

const certifications = [
    
  {
    title: 'Data Analytics Virtual Experience',
    platform: 'Deloitte Forage',
    year: 'May 19, 2025'
  },
  {
    title: 'Data Science',
    platform: 'YBI Foundation',
    year: '2023–2024'
  },
  {
    title: 'AI Tools Workshop',
    platform: 'Be10X',
    year: '2023–2024'
  },
  {
    title: 'Power BI Workshop',
    platform: 'Be10X',
    year: '2023–2024'
  },
  {
    title: 'Basics of Python',
    platform: 'Springboard',
    year: '2024'
  },
  {
    title: 'Enterprise AI',
    platform: 'IBM',
    year: '2024'
  },
  {
    title: 'Python Using AI',
    platform: 'Be10X',
    year: '2025'
  },
  {
    title: 'Data Visualization',
    platform: 'TCS',
    year: '2025'
  }
];

const Certifications = () => {
  return (
    <section className="certification-section" id="certifications">
      <h2>🎓 Certifications & Short Courses</h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Platform:</strong> {cert.platform}</p>
            <p><strong>Year:</strong> {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
