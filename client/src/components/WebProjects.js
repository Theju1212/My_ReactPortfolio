// src/components/WebProjects.js
import React from 'react';
import './Projects.css';

// ✅ Import images
import weather from '../assets/projects/atmosphere_app.png';
import calendar from '../assets/projects/mini_calendar.png';
import qrReact from '../assets/projects/qr_code_generator.png';
import qrPython from '../assets/projects/QR_code.png';
import quiz from '../assets/projects/quiz_app.png';
import password from '../assets/projects/Random_password_app.png';
import chat from '../assets/projects/real_time_chat.png';
import notes from '../assets/projects/simple_notes_App.png';
import webserver from '../assets/projects/simple_web_server.png';
import todo from '../assets/projects/To_Do_list.png';
import toast from '../assets/projects/toast_notification.png';
import shortener from '../assets/projects/url_shortener.png';

// ✅ Correct array name: `projects`
const projects = [
  {
    title: 'Atmosphere App',
    image: weather,
    tech: 'A weather app using an official government API. Enter a city name to get temperature, humidity, and wind speed. Built with HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/Weather-App/',
    codeLink: 'https://github.com/Theju1212/Weather-App'
  },
  {
    title: 'Mini Calendar',
    image: calendar,
    tech: 'A simple calendar that displays the current date, year, and month using HTML, CSS, and JavaScript',
    demoLink: 'https://theju1212.github.io/Simple_Calendar/',
    codeLink: 'https://github.com/Theju1212/Simple_Calendar'
  },
  {
    title: 'QR Code Generator',
    image: qrReact,
    tech: 'Generates a QR code from user input (text or URL). Built using HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/QR_Code_Generator/',
    codeLink: 'https://github.com/Theju1212/QR_Code_Generator'
  },
  {
    title: 'QR Code (Python)',
    image: qrPython,
    tech: 'A Python-based QR code generator with a stylish CSS UI.',
    demoLink: ' https://lnkd.in/ddRYdBbJ',
    codeLink: 'https://github.com/Theju1212/Qr-Code-Generator'
  },
  {
    title: 'Quiz App',
    image: quiz,
    tech: 'A quiz game with 20 random questions. Green for correct answers, red for incorrect. Users can replay and track their scores. Built with HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/Quiz-App/',
    codeLink: 'https://github.com/Theju1212/Quiz-App'
  },
  {
    title: 'Random Password App',
    image: password,
    tech: 'Generates a secure random password when clicked. Built with HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/Generate_Random_pwd/',
    codeLink: 'https://github.com/Theju1212/Generate_Random_pwd'
  },
  {
    title: 'Real-Time Chat',
    image: chat,
    tech: 'A Flask-based real-time chat app with live updates using Socket.IO and JavaScript. Deployed on Render.',
    demoLink: 'https://lnkd.in/d-PuiTNK',
    codeLink: 'https://github.com/Theju1212/flask-chat-app'
  },
  {
    title: 'Simple Notes App',
    image: notes,
    tech: 'A minimal notes app where users can add and delete notes. Built with HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/Notes-Writing-Deleting/',
    codeLink: 'https://github.com/Theju1212/Notes-Writing-Deleting'
  },
  {
    title: 'Simple Web Server',
    image: webserver,
    tech: 'A Python web server hosted using Flask and Render. Helps understand web hosting, deployment, and GitHub integration.',
    demoLink: ' https://lnkd.in/emNsztcR',
    codeLink: 'https://github.com/Theju1212/web_server'
  },
  {
    title: 'To-Do List',
    image: todo,
    tech: 'A to-do app where users can add or delete daily tasks. Built with HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/To-Do-List/',
    codeLink: 'https://github.com/Theju1212/To-Do-List'
  },
  {
    title: 'Toast Notification',
    image: toast,
    tech: 'A sidebar popup notification for success, errors, and validation messages. Built with HTML, CSS, and JavaScript.',
    demoLink: 'https://theju1212.github.io/simple_toast_notification/',
    codeLink: 'https://github.com/Theju1212/simple_toast_notification'
  },
  {
    title: 'URL Shortener',
    image: shortener,
    tech: 'A Flask-based URL shortener deployed on Render. Converts long URLs into short, shareable links.',
    demoLink: 'https://lnkd.in/eZBujFiZ ',
    codeLink: 'https://github.com/Theju1212/url_shortener'
  }
];



// ✅ Component that renders the projects
const WebProjects = () => {
  return (
    <section className="projects-section">
      <h2>Web Development Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <span>{project.tech}</span>
            <div className="project-buttons">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebProjects;
