import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-content">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2015 – 2020</div>
            <div className="timeline-details">
              <h3>Schooling</h3>
              <p>Studied at Z.P.Girls.High.School, focused on building strong academic foundation and communication skills.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2020 – 2022</div>
            <div className="timeline-details">
              <h3>Intermediate</h3>
              <p>Completed intermediate at Rajiv Gandhi University of Knowledge And Technologies, specialized in MPC (Maths, Physics, Chemistry).</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2022 – Present</div>
            <div className="timeline-details">
              <h3>Graduation</h3>
              <p>Pursuing B.Tech at Sri Venkateswra College of Engineering And Technology  with interest in Web Development, Data Analysis & Tech Talks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
