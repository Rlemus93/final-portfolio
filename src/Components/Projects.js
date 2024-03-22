import React, { useState } from 'react';

const Projects = ({ projectNames }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectNames.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectNames.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='card'>
      <div className='projectHeading'>
        <h1>Projects</h1>
      </div>
      <div className='projectCard'>
        <div className='projectname'>
          <h3>{projectNames[currentProjectIndex][0]}</h3>
        </div>
        <div className='techstack'>
          <p>{projectNames[currentProjectIndex][1]}</p>
        </div>
        <div className='project-image'>
          {projectNames[currentProjectIndex][2]}
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
  );
};

export default Projects;
