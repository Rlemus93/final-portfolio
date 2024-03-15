import React, { useState } from 'react';
import Projects from './Components/Projects';
import './App.css';
import profileimage from './images/profileimage.JPG';
import ruby from './images/ruby.png';
import rubyonrails from './images/rubyonrails.png';
import react from './images/react.png';
import css from './images/css.png';
import html from './images/html.png';
import js from './images/js.png';
import github from './images/github.png';
import linkdin from './images/linkdin.png';
import verse from './images/verse.png';
import postgresql from './images/postgresql.png';
import tictactoe from './images/tictactoe.png';
import poisongame from './images/poisongame.png';
import comingsoon from './images/comingsoon.jpeg';

const App = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectNames = [
    ['Quote/Verse Generator', 'HTML, JavaScript, and CSS.', <img src={verse} alt="" />],
    ['Tic-Tac-Toe', 'First React App. React, HTML, JavaScript, and CSS.', <img src={tictactoe} alt="" />],
    ['Poison Game', 'HTML, JavaScript, and CSS.', <img src={poisongame} alt="" />],
    ['Capstone-Project', 'this is a little summary', <img src={comingsoon} alt="" />],
    ['future project', 'this is a little summary', <img src={comingsoon} alt="" />],
  ];

  const nextProject = () => {
    setCurrentProjectIndex(currentProjectIndex === projectNames.length - 1 ? 0 : currentProjectIndex + 1);
  };

  const prevProject = () => {
    setCurrentProjectIndex(currentProjectIndex === 0 ? projectNames.length - 1 : currentProjectIndex - 1);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ryan-lemus/');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Rlemus93');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rlemus93@gmail.com';
  };

  return (
    <div>
      <header>
        <img className="headerphotos" src={linkdin} alt="" onClick={handleLinkedInClick} />
        <img className="headerphotos" src={github} alt="" onClick={handleGitHubClick} />
        <div className="email-box" onClick={handleEmailClick}>
          Email Me
        </div>
      </header>
      <h1>
        Ryan Lemus<img className="profile" src={profileimage} alt="Profile" />
      </h1>

      <div className="container">
        <div className="left-section">
          <div className="aboutme">
            <h3>
              <u>About Me</u>
            </h3>
            <p>
            Hello there! I'm on the cusp of graduating from an intensive 4-month boot camp, where I've immersed myself in the world of Full Stack Development. My journey into tech was sparked by a profound curiosity about how technology shapes our daily lives and a strong desire to make a meaningful contribution to the field.

            Currently, I'm focused on refining my skills across both frontend and backend development. I've developed a solid foundation in HTML, CSS, and JavaScript, with a particular emphasis on crafting intuitive user interfaces using React. On the backend, I've specialized in utilizing Ruby and Ruby on Rails to build robust, scalable web applications, all while leveraging PostgreSQL databases to ensure seamless data management.

            Driven by a passion for clean, efficient coding practices, I'm dedicated to staying ahead of industry trends and continuously expanding my knowledge base. I believe in the power of collaboration and thrive in team-oriented environments, drawing from my years of experience in sales and leadership roles to effectively communicate and problem-solve with colleagues.

            I invite you to explore my portfolio to get a glimpse of my projects and see how we can work together to turn your ideas into reality.
            </p>
          
          </div>
          <div className="skills"></div>
          <h3 className="skillsheader">
            <u>Skills</u>
          </h3>
          <ul className="skillslist">
            <li>
              <u>JavaScript:</u> Proficient in modern syntax, DOM manipulation, and building dynamic web apps with frameworks.
            </li>
            <li>
              <u>HTML/CSS:</u> Strong command in semantic HTML5, CSS styling, responsive design, and layout techniques.
            </li>
            <li>
              <u>React.js:</u> Experienced in building SPAs, understanding component lifecycle, state management, and routing.
            </li>
            <li>
              <u>Ruby/Ruby on Rails:</u> Skilled in backend web development, building RESTful APIs, MVC architecture, and database
              interactions.
            </li>
            <li>
              <u>PostgreSQL:</u> Familiar with database design, SQL queries, and management in PostgreSQL for scalable applications.
            </li>
          </ul>
          <div className="skills">
            <div className="skills-images">
              <img className="skillsimage" src={js} alt="" />
              <img className="skillsimage" src={html} alt="" />
              <img className="skillsimage" src={css} alt="" />
              <img className="skillsimage" src={react} alt="" />
              <img className="skillsimage" src={ruby} alt="" />
              <img className="skillsimage" src={rubyonrails} alt="" />
              <img className="skillsimage" src={postgresql} alt="" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="project-cards">
            <Projects projectName={projectNames[currentProjectIndex]} />
          </div>
          <div className="buttons">
            <button className="button" onClick={prevProject}>
              Previous
            </button>
            <button className="button" onClick={nextProject}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;