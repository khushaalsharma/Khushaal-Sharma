import React from 'react';
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
    <div className='project'>
      <div className='projectImg' onClick={handleProject}>
        <img src={project} alt='project.jpg'/>
      </div>
      <div>
        <div>
          <h4 className='projectTitle'>{data[0]}</h4>
        </div>
        <div className='projectDetails'>
          <p>Tech Stack: {data[1]}</p>
          <p>
            <strong>Description:</strong> {data[2]}
          </p>
          <p className='githubLink' onClick={handleGithub}>
            GitHub Link
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectComp
