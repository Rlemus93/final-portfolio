import React from "react"
import ruby from "../images/ruby.png"
import rails from "../images/rails.png"
import react from "../images/react.png"
import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/js.png"
import postgres from "../images/postgre.png"
import github from "../images/github.png"
import git from "../images/git.png"
import go from "../images/go.png"

const Skills = () => {
  return (
    <>
      <div className="skillsHeader">
        <h1>Skills</h1>
      </div>
      <div className="skills-images">
        <div className="frontEndCards">
          <div className="skillsTitles">
            <h3>
              <u>Front-End</u>
            </h3>
          </div>
          <img className="skillsimage" src={js} alt="" />
          <img className="skillsimage" src={html} alt="" />
          <img className="skillsimage" src={css} alt="" />
          <img className="skillsimage" src={react} alt="" />
        </div>
        <div className="backEndCards">
          <div className="skillsTitles">
            <h3>
              <u>Back-End</u>
            </h3>
          </div>
          <img className="skillsimage" src={ruby} alt="" />
          <img className="skillsimage" src={rails} alt="" />
          <img className="skillsimage" src={go} alt="" />
        </div>
        <div className="otherCards">
          <div className="skillsTitles">
            <h3>
              <u>Development Tools</u>
            </h3>
          </div>
          <img className="skillsimage" src={postgres} alt="" />
          <img className="skillsimage" src={github} alt="" />
          <img className="skillsimage" src={git} alt="" />
        </div>
      </div>
    </>
  )
}

export default Skills
