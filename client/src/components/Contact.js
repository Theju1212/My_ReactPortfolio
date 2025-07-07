// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch("https://my-reactportfolio.onrender.com/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    alert("Message Sent Successfully!");
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    alert("Something went wrong.");
  }
};

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>I’d love to hear from you!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="https://github.com/theju1212" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/velvaluri-thejaswini-60a79a333/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a
  href="mailto:thejuvelvaluri@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

      </div>
    </section>
  );
};

export default Contact;
