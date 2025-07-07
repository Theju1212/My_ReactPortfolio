import React from 'react';
import './Achievements.css';

const achievements = [
  "🏆 Secured 2nd place at National Public Speaking Competition (2025)",
  "🥇 Won 1st place at Speech Contest (2024)",
  "🛠️ Served as Coordinator in college-level Hackathon events",
  "🎤 Actively participated in hackathons, speech contests, and other college activities"
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements & Awards</h2>
      <ul className="achievement-list">
        {achievements.map((item, index) => (
          <li key={index} className="achievement-item">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
