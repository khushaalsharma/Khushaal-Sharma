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
      github: "https://github.com/khushaalsharma/Cobroz-prototype",
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
      name: "FRAUD DETECTOR",
      techStack: "Python, Numpy, Pandas, Scikit-Learn, Seaborn",
      desc: "A supervised learning based classification learning model with an accuracy of 99.96% which can detect fraud credit card transactions",
      github: "https://github.com/khushaalsharma/credit-card-fraud-detection",
      deploy: ""
    },
    {
      name: "EXPLODING CAT",
      techStack: "ReactJS",
      desc: "A project which allows you to play - exploding cat game. Try your luck.",
      github: "https://github.com/khushaalsharma/Exploding-Cat",
      deploy: "https://exploding-cat.vercel.app/"
    },
  ]

  return (
    <>
      <Navbar/>
      <div className="row projectCard">
        <div className='col-md-1'></div>
        <div className='col-md-10 projects'>
          <h1>Projects</h1>
          <div className='row'>
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
