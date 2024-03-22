import React from 'react'
import ruby from '../images/ruby.png';
import rubyonrails from '../images/rubyonrails.png';
import react from '../images/react.png';
import css from '../images/css.png';
import html from '../images/html.png';
import js from '../images/js.png';
import postgresql from '../images/postgresql.png';
import github from '../images/github.png'
import git from '../images/git.png'

const Skills = () => {
  return (
    <>
      <div className="skillsHeader">
        <h1>
          Skills
        </h1>
      </div>
      {/* <ul className="skillslist">
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
      </ul> */}
      <div className="skills-images">
        <div className='frontEndCards'>
          <div className='skillsTitles'>
            <h3><u>Front-End</u></h3>
          </div>
          <img className="skillsimage" src={js} alt="" />
          <img className="skillsimage" src={html} alt="" />
          <img className="skillsimage" src={css} alt="" />
          <img className="skillsimage" src={react} alt="" />
        </div>
        <div className='backEndCards'>
          <div className='skillsTitles'>
            <h3><u>Back-End</u></h3>
          </div>
          <img className="skillsimage" src={ruby} alt="" />
          <img className="skillsimage" src={rubyonrails} alt="" />
        </div>
        <div className='otherCards'>
          <div className='skillsTitles'>
            <h3><u>Development Tools</u></h3>
          </div>
          <img className="skillsimage" src={postgresql} alt="" />
          <img className="skillsimage" src={github} alt="" />
          <img className="skillsimage" src={git} alt="" />
        </div>
      </div>
    </>
  )
}

export default Skills