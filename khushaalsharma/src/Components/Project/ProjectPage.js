import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectComp from './ProjectComp';
import "bootstrap/dist/css/bootstrap.css";
import "../Styles.css";

const ProjectPage = () => {

  const projects = [
    {
      name: "COBROZ",
      techStack: "MERN, Bootstrap CSS",
      desc: "A discussion platform inspired as a combination of LinkedIn and Twitter's web application",
      github: "https://github.com/The-Cobroz/cobroz-website-webapp",
      deploy: "https://github.com/The-Cobroz/cobroz-website-webapp"
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
    {
      name: "DOG BREED CLASSIFIER",
      techStack: "TensorFlow, Keras, Transfer Learning, Deep Learning, Mobile Net V2",
      desc: "A Transfer Learning based classification model made using Mobile Net V2 model. This model is trained to classify the dog image according to its breed. Its accuarcy level is currently low.",
      github: "https://colab.research.google.com/drive/1SEJAPPiNUjhw2q_enMQEESNQ8PXn03Di",
      deploy: "https://colab.research.google.com/drive/1SEJAPPiNUjhw2q_enMQEESNQ8PXn03Di"
    },
    {
      name: "FILE COMPRESSOR",
      techStack: "C++",
      desc: "A text file compression and decompression tool based on Huffman Coding Algorithm. It can reduce the size by almost 47%.",
      github: "https://github.com/khushaalsharma/File-Compressor",
      deploy: "https://github.com/khushaalsharma/File-Compressor"
    }
  ]

  return (
    <>
      <Navbar/>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <h1>Projects</h1>
          <div>
            {
              projects.map((project, index) => (
                <div className='project' key={index}>
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
