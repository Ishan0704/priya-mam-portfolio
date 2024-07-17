import React from 'react';
import './about.css';
import AboutImg from "../../assets/Priya-Photo-removebg-preview.jpg";
import CV from '../../assets/John-Cv.pdf'
import Info from './Info';

const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
    
      <div className="about__container container grid">
        <img src={AboutImg} alt="About" className="about__img" />
        
        <div className="about__data">
            <Info/>
            <div>
            <p className="about__description">
              Ms. Priya Dinkar Rakibe, an Asst. Professor in Computer Engineering, is an energetic and dedicated educator involved in techno-societal initiatives like Atma Nirbhar Bharat, Digital India, and Women Empowerment. She mentors enthusiastic engineering students and has been recognized by AICTE, the Ministry of Education, and MoE's Innovation Cell for her exceptional mentorship in Smart India Hackathon 22 & 23. Her teams have won numerous prizes in prestigious hackathons and competitions, including Smart India Hackathon, UNESCO India Africa Hackathon, Kavach23, TIAA23&24, Dipex23&24, and Rajasthan Police Hackathon.
            </p>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default About;
