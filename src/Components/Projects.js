import React from 'react'

const Projects = ({ projectName }) => {
  return (
    <div className='card'>
     <div className='projectname'> <h3><u>Current Projects</u></h3> 
     <h3> {projectName[0]}</h3>
     </div>
      <p> {projectName[1]}</p>
      <div className='project-image'>
        {projectName[2]}
        </div>
    </div>
  )
}

export default Projects