import React from 'react'
import './About.css'
import aboutImage from '../../assets/images/about.jpeg';
const About = () => {
  return (
    <div className="about-container">

      <div className="about-image-container">
        <img className="about-image" src={aboutImage} alt="About" />
      </div>

    <div className='about-text-container'>
      <h1>About Me</h1>
      <p>
        Habiba is a professional voiceover and dubbing artist with a versatile range and a passion for storytelling. With a track record of working with global brands like Nescafe, Kellogg's Noodles, and Novartis, her voice has been featured in commercial campaigns and spots for clients like Italian Airways and applications such as Peekaboo.
      </p>
      <p>
        In the world of dubbing, she has lent her voice to beloved characters in projects for Netflix, including the series Barbie Mysteries, Sakamoto, and the popular game Horizon. Her portfolio also includes work on series like Zombies and Historium, as well as Ares.
      </p>
      <p>
        Fluent in both Arabic and English with a subtle Arabic accent, Habiba operates from a professional home studio, ensuring high-quality, broadcast-ready audio for every project.
      </p>
    </div>

    </div>
  )
}

export default About
