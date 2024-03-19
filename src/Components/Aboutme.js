import React from 'react';
import ruby from '../images/ruby.png';
import rubyonrails from '../images/rubyonrails.png';
import react from '../images/react.png';
import css from '../images/css.png';
import html from '../images/html.png';
import js from '../images/js.png';
import postgresql from '../images/postgresql.png';
import profileimage from '../images/profileimage.JPG';

const Aboutme = () => {
  return (
    <div className="left-section">
      <div className="aboutme">
        <div className='left-titles'>
          <div className="skills">
            <h3 className="skillsheader">
              <u>Skills</u>
            </h3>
            <ul className="skillslist">
              <li>
                <u>JavaScript:</u> Proficient in modern syntax, DOM manipulation, and building dynamic web apps with frameworks.
              </li>
              <li>
                <u>React:</u> Experienced in building SPAs, understanding component lifecycle, state management, and routing.
              </li>
              <li>
                <u>Ruby/Ruby on Rails:</u> Skilled in backend web development, building RESTful APIs, MVC architecture, and database interactions.
              </li>
              <li>
                <u>HTML/CSS:</u> Strong command in semantic HTML5, CSS styling, responsive design, and layout techniques.
              </li>
              <li>
                <u>PostgreSQL:</u> Familiar with database design, SQL queries, and management in PostgreSQL for scalable applications.
              </li>
              <li>
                <u>Test-Driven Development (TDD):</u> Proficient in writing tests before implementing code, ensuring robustness, and maintaining code quality throughout the development process.
              </li>
            </ul>
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
          <h3>
            <u>About Me</u>
          </h3>
        </div>
        <div className='aboutmepara'>
          Hello there! I'm on the cusp of graduating from an intensive 4-month boot camp, where I've immersed myself in the world of Full Stack Development. My journey into tech was sparked by a profound curiosity about how technology shapes our daily lives and a strong desire to make a meaningful contribution to the field.

          Currently, I'm focused on refining my skills across both frontend and backend development. I've developed a solid foundation in HTML, CSS, and JavaScript, with a particular emphasis on crafting intuitive user interfaces using React. On the backend, I've specialized in utilizing Ruby and Ruby on Rails to build robust, scalable web applications, all while leveraging PostgreSQL databases to ensure seamless data management.

          Driven by a passion for clean, efficient coding practices, I'm dedicated to staying ahead of industry trends and continuously expanding my knowledge base. I believe in the power of collaboration and thrive in team-oriented environments, drawing from my years of experience in sales and leadership roles to effectively communicate and problem-solve with colleagues.

          I invite you to explore my portfolio to get a glimpse of my projects and see how we can work together to turn your ideas into reality.
          <img className="profile" src={profileimage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
