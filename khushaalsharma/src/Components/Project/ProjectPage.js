import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectComp from './ProjectComp';
import "../Styles.css";

const ProjectPage = () => {

  const projects = [
    {
      name: "COBROZ",
      techStack: "MERN, Bootstrap CSS",
      desc: "A discussion platform inspired as a combination of LinkedIn and Twitter's web application",
      github: "https://github.com/The-Cobroz/Cobroz-prototype",
      deploy: ""
    },
    {
      name: "WEATHER APP",
      techStack: "ReactJS, Bootstrap CSS, APIs",
      desc: "A weather app which allows the user to search for a desired city and get the basic weather forecast for the particular city",
      github: "https://github.com/khushaalsharma/Weather-App",
      deploy: "https://weather-app-neon-delta-87.vercel.app/"
    }, 
    {
      name: "DRUM KIT",
      techStack: "HTML, Boostrap CSS, JavaScript",
      desc: "A fun web application which allows users to play the instruments of a drum set. The app uses DOM manipulation to play the sounds",
      github: "https://github.com/khushaalsharma/Drum-Kit",
      deploy: "https://drum-kit-nine-eta.vercel.app/"
    },
    {
      name: "DICE GAME",
      techStack: "HTML, CSS JavaScript",
      desc: "A simple dice game which uses the JavaScript's random module. On relaoding the site one can see who won the game",
      github: "https://github.com/khushaalsharma/Dice-Game",
      deploy: "https://dice-game-theta-drab.vercel.app/"
    },
    {
      name: "TINDOG",
      techStack: "HTML, Bootstrap CSS",
      desc: "A simple webpage which uses the Boostrap CSS for responsive and likeable design. Concept is inspired from Tinder",
      github: "https://github.com/khushaalsharma/TinDog",
      deploy: ""
    }
  ]

  return (
    <>
      <Navbar/>
      <div className="row projectCard">
        <div className='col-md-1'></div>
        <div className='col-md-10 projects'>
          <h1>Projects</h1>
          <div className='row'>
            {/* <div className='col-md-4'>
              <ProjectComp data={projects[0]}/>
            </div>
            <div className='col-md-4'>
              <ProjectComp data={projects[1]}/>
            </div>
            <div className='col-md-4'>
              <ProjectComp data={projects[2]}/>
            </div>
          </div>
          <div className='row projectCard'>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
              <ProjectComp data={projects[3]}/>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
              <ProjectComp data={projects[4]}/>
            </div>
            <div className='col-md-1'></div> */}
            {
              projects.map((project, index) => (
                <div className='col-md-4 projectCard' key={index}>
                  <ProjectComp data={[project.name, project.techStack, project.desc, project.github, project.deploy]}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
      <Footer/>
    </>
  )
}

export default ProjectPage
