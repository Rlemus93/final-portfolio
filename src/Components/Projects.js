import React, { useState } from "react"

const Projects = ({ projectNames }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectNames.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectNames.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="card">
      <div className="projectHeading">
        <h1>Projects</h1>
      </div>
      <div className="projectCardContainer">
        <div
          className="projectCardWrapper"
          style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
        >
          {projectNames.map((project, index) => (
            <div key={index} className="projectCard">
              <div className="projectname">
                <h4>{project[0]}</h4>
              </div>
              <div className="projectdescription">
                <p style={{ fontSize: "1.5rem", color: "black" }}>
                  {project[4]}
                </p>
              </div>
              <a
                href={project[3]}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image"
              >
                {project[2]}
              </a>
            </div>
          ))}
        </div>
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
  )
}

export default Projects
