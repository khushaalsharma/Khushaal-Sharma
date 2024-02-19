import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Styles.css";

const AboutPage = () => {
    const handleHome = () => {
        window.location.href = "/";
    }

    const handlePro = () => {
        window.location.href = "/projects"
    }
  return (
    <>
        <Navbar/>
        <div className='row aboutpage'>
            <div className='col-md-2'></div>
            <div className='col-md-8 aboutsection'>
                <h1 className='subhead'>About Me</h1>
                <div>
                    <h4>In a nutshell</h4>
                    <p>
                        Hi there! I am Khushaal, a programmer, college student, content creator and entrepreneurship enthusiast. I am trying to build a small product for the legal industry of India which I believe can bridge the gap between the legal community and common people. I also run an instagram page of mine where I am posting about my coding journey.
                    </p>
                </div>
                <div>
                    <h4>Professionally</h4>
                    <p>
                        I began my Bachelors degree back in 2021, started learning <strong>Data Structures & Algorithms using C++</strong>. Along my first year I just focused on perfecting my command over C++ language by solving various problems over LeetCode and GeeksforGeeks. As of now I have <strong>solved over 150 DSA problems</strong> over these platforms along with some contests on LeetCode and Code Studio
                    </p>
                    <p>
                        Ever since I was in my school, one of the primary goals of my life has been to pursue entrepreneurship as a full-time thing. I have had various ideas in the past, I have explored them, talked to various people regarding it. Some were mediocre, some were great, some I have dropped as I didn't see any potential in them, some I still have in my bank on which I would love to work. Currently I am developing <a href='https://www.cobroz.com'>Cobroz</a>, which aims to simplify the legal complexities through connecting the legal community with the common people ensuring a sense of trust and ease in connecting. I hope to bring it out as soon as possible.
                    </p>
                    <p>
                        As of now my complete focus is on creating great software projects which I believe can help a majority of people. I believe that the best thing about being engineering student is that I have the power to build anything which I can imagine. Hence, I went on to learn <strong>Web Development in MERN stack</strong> in August 2023, till now I have created several projects with main Full Stack project - Cobroz. I have also begin with <strong>learning Machine Learning</strong> as a new goal of 2024.
                    </p>
                </div>
                <div>
                    <h4>Personally</h4>
                    <p>
                        I have always found sci-fi movies and TV shows really interesting, walking and listening to my favorite songs is my favorite timepass. There are a lot of things that I want to do in my life, I wanted to try and see becoming a creator, so started my instagram page. I will be doing a lot of things in my future for sure. 
                    </p>
                    <p>
                        Well there is one thing that I can say for sure, and that is I want both - popularity and wealth. These are my ultimate goals and all of my focus and energy is spent towards this one thing. 
                    </p>
                </div>
                <div className='subhead'>
                    <button className='btn btn-outline-dark' onClick={handleHome}>Back to Home Page</button>
                    <button className='btn btn-outline-dark' onClick={handlePro}>See my Projects</button>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
        <Footer/>
    </>
  )
}

export default AboutPage
