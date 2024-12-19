import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Styles.css";
import Typewriter from './TypeWriter';
import khushaal from "../Images/khushaal.png";

import {AnimatePresence, delay, motion} from "framer-motion";

const MainPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Cobroz",
      tech: "MERN, Bootstrap CSS",
      desc: "A discussion forum tailored to the legal industry",
      link: "https://github.com/The-Cobroz/cobroz-website-webapp"
    },
    {
      id: 2,
      name: "Credit Card Fraud Detection",
      tech: "Python, Scikit-Learn, Pandas, Seaborn",
      desc: "A Supervised Machine Learning Classification Model which classifies if a credit card transaction is fraud",
      link: "https://github.com/khushaalsharma/credit-card-fraud-detection"
    },
    {
      id: 3,
      name: "File Compressor",
      tech: "C++, OOPs",
      desc: "File Compression and Decompression tool made using C++ based on Huffman Coding Algorithm",
      link: "https://github.com/khushaalsharma/File-Compressor"
    },
    {
      id: 4,
      name: "Exploding Kitty",
      tech: "React.js, Bootstrap CSS",
      desc: "A mini game which is based on user's luck",
      link: "https://exploding-cat.vercel.app/"
    }
  ];

  const viewProjects = () => {
    return projects.map((data) => (
      <div
        className='projects'
        key={data.id}  // Add key for React to manage list items properly
        layoutId={`card-${data.id}`}  // Use a unique layoutId for each project
        onClick={() => setSelectedId(data.id)}
      >
        <h2>{data.name}</h2>
        <p>Tech Stack: {data.tech}</p>
      </div>
    ));
  };

  const popUpProject = () => {
    const project = projects.find((data) => data.id === selectedId);
    if (!project) return null;

    return (
      <div className="popup-project" layoutId={`card-${selectedId}`}>
        <h1>{project.name}</h1>
        <p>Tech Stack: {project.tech}</p>
        <p>Description: {project.desc}</p>
        <a href={project.link}>Link</a>
      </div>
    );
  };

  
  return (
    <>
        <Navbar/>
        <div className='mainpage'>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8 mainpage-text'>
                  <h1><Typewriter text="Hi I am Khushaal" typingSpeed={100}/></h1>
                  <div className='myDesc'>
                      <h4 className='infoText'>A Programmer</h4>
                      <h4 className='infoText'>A CS Undergrad</h4>
                  </div>
              </div>
              <div className='col-md-2'></div>
            </div>
            <section id='about'>
              <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8 meText'>
                  <p>
                    Hey Guys!
                  </p>
                  <p>
                    I am Khushaal Sharma, a Computer Science & Engineering student 😄. 
                  </p>
                  <p>Currently working with:</p>
                  <marquee>
                    <h6>C++</h6>
                    <h6>PYTHON</h6>
                    <h6>HTML</h6>
                    <h6>CSS</h6>
                    <h6>JAVASCRIPT</h6>
                    <h6>REACT.JS</h6>
                    <h6>NODE.JS</h6>
                    <h6>MONGODB</h6>
                    <h6>SQL</h6>
                    <h6>MACHINE LEARNING</h6>
                    <h6>JAVA</h6>
                  </marquee>     
                  <button className='btn btn-light' onClick={() =>  window.location.href = "/about"}>Know More</button>
                  <button className='btn btn-outline-light' onClick={() => {window.location.href = "https://drive.google.com/file/d/1Z8l5r7nolCnA8zMzCG0ATxwiizQD8e5z/view?usp=sharing"}}>View CV</button>
                </div>
                <div className='col-sm-2'></div>
              </div>
            </section>
            <section id='projects'>
              <h1>My Notary Projects</h1>
              <div className='row' initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}} layout={{delay: 10}}>
                <div className='col-sm-5'>
                  {viewProjects()}
                </div>
                <div className='col-sm-7 projectView'>
                  {selectedId && popUpProject()}
                </div>
              </div>
              <button className='btn btn-outline-light' onClick={() => {window.location.href = "/projects"}}>View All Projects</button>
            </section>
            <section id='contact'>
              <h5>Contact Me</h5>
              <div className='contactBtn'>
                <button className='btn btn-primary' onClick={() => {window.location.href = "https://www.linkedin.com/in/khushaal-sharma"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></button>
                <button className='btn btn-primary' onClick={() => {window.location.href = "https://www.twitter.com/_khushaalsharma"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></button>
                <button className='btn btn-primary' onClick={() => {window.location.href = "mailto:khushaalsharma1@gmail.com"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></button>
              </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default MainPage;
