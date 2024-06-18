import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import project from "../../Images/HiRes-17.jpg";

const ProjectComp = ({data}) => {

  const handleGithub = () => {
    if(data[3]){
      window.location.href = data[3];
    }
  }

  const handleProject = () => {
    if(data[4]){
      window.location.href = data[4];
    }
  }

  return(
    <div className='row'>
      <div className='col-sm-3 projectImg'>
        <img src={project} alt='project.jpg'/>
      </div>
      <div className='col-sm-9 projectData'>
        <h4 className='projectTitle'>{data[0]}</h4>
        <div className='projectDetails'>
          <p>Tech Stack: {data[1]}</p>
          <p>Description: {data[2]}</p>
          <p className='githubLink' onClick={handleGithub}>
            Github Link
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectComp
