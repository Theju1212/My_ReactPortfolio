import React from 'react';
import './Home.css';
import myPhoto from '../assets/my_photo.jpg';
import { ReactTyped } from 'react-typed';


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text">
          <h1>Hi, I'm Thejaswini</h1>
          <h2>
            <ReactTyped
              strings={["Web Developer", "Public Speaker", "Data Analyst", "Enthusiastic Learner"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p>Crafting responsive web experiences with React, Node.js & MongoDB. Welcome to my portfolio!</p>
        </div>
        <div className="image">
          <img src={myPhoto} alt="Thejaswini" />
        </div>
      </div>
    </section>
  );
};

export default Home;
