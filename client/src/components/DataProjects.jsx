// src/components/DataProjects.jsx
import React from 'react';
import './Projects.css';

// Import images
import dash1 from '../assets/dashboards/Amazon_prime.png';
import dash2 from '../assets/dashboards/covid19_analysis.png';
import dash3 from '../assets/dashboards/ev_analysis.png';
import dash4 from '../assets/dashboards/health_analysis.png';
import dash5 from '../assets/dashboards/shopify_salesforce.png';
import dash6 from '../assets/dashboards/tripodvisor.png';

const dataDashboards = [
  {
    title: 'Amazon Prime Dashboard',
    image: dash1,
    tech: 'Power BI dashboard analyzing content trends, viewership patterns, and user preferences on Amazon Prime.'
  },
  {
    title: 'Covid-19 Analysis',
    image: dash2,
    tech: 'Power BI dashboard tracking COVID-19 cases, recoveries, vaccinations, and country-wise trends.'
  },
  {
    title: 'EV (Electric Vehicle) Analysis',
    image: dash3,
    tech: 'Tableau dashboard exploring EV adoption, sales data, charging infrastructure, and regional patterns.'
  },
  {
    title: 'Health & Wellness Analysis',
    image: dash4,
    tech: 'Power BI dashboard focusing on fitness activity, sleep hours, calorie burn, and health behavior insights.'
  },
  {
    title: 'Shopify + Salesforce Integration',
    image: dash5,
    tech: 'Power BI dashboard visualizing e-commerce KPIs like orders, revenue, and CRM syncing with Salesforce.'
  },
  {
    title: 'TripAdvisor Reviews Dashboard',
    image: dash6,
    tech: 'Tableau dashboard analyzing travel ratings, top destinations, and customer review sentiment.'
  }
];

const DataProjects = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {dataDashboards.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataProjects;
