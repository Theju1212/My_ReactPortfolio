// src/components/ProjectSelector.jsx
import React from 'react';
import './ProjectSelector.css';

const categories = [
  { name: 'Data Analytics' },
  { name: 'Web Development' }
];

const ProjectSelector = ({ onSelectCategory }) => {
  return (
    <div className="selector-container">
      <h2>Choose a Project Category</h2>
      <div className="circle-menu">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="circle-button pulse-ring"
            onClick={() => onSelectCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectSelector;
