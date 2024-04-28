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
                    <h4>To put it briefly</h4>
                    <p>
                        Hi there! I am Khushaal Sharma, currently pursuing my B.Tech in Computer Science at MSIT, New Delhi. I have been working as full stack web developer since more than a year now. I am also working on learning about ML. Apart from this one thing that I love is - driving.
                    </p>
                </div>
                <div>
                    <h4>Professionally</h4>
                    <p>
                        I wrote my first ever line of code back in 2019 using python and have been coding since. At that time I created my first ever solo project as well - a quiz game using python and MySQL.
                    </p>
                    <p>
                        Since then I have been learning various technologies and programming languages. I have learnt - C, C++, Java, JavaScript, php, etc. I have solved more than 150 questions based on data structures & algorithms on platform like <em className='linkToOther' onClick={() => {window.location.href = "https://www.geeksforgeeks.org/user/khushaalsharma1/"}}>GeeksForGeeks</em> and <em className='linkToOther' onClick={() => {window.location.href = "https://leetcode.com/u/_khushaalsharma_/"}}>LeetCode</em> (Click to view my profile).
                    </p>
                    <p>
                        I have been creating personal web development projects since more than an year using the MERN stack. For database I have used MongoDB and MySQL. See my projects at my GitHub.
                    </p>
                    <p>
                        Sudden boom in the AI and my interest in the field, made me start with learning about AI & ML. Currently I am learning ML and have created some supervised learning based classification and regression models.
                    </p>
                </div>
                <div>
                    <h4>Work Experience</h4>
                    <p>
                        I am currently interning at <em className='linkToOther' onClick={() => {window.location.href = "https://www.linkedin.com/company/nexus-software-pvt-ltd/"}}>Nexus Info</em> as a web developer intern. This internship involved use of MERN stack and my other web designing skills.
                    </p>
                </div>
                <div>
                    <h4>My Skills</h4>
                    <div className='skill-icons'>
                        
                        <i class="devicon-c-plain colored"></i>
          
                        <i class="devicon-cplusplus-plain colored"></i>
                        
                        <i class="devicon-html5-plain colored"></i>
                    
                        <i class="devicon-css3-plain colored"></i>
                                
                        <i class="devicon-javascript-plain colored"></i>
                    
                        <i class="devicon-java-plain colored"></i>
                    
                        <i class="devicon-python-plain colored"></i>
                    
                        <i class="devicon-jupyter-plain colored"></i>
                    
                        <i class="devicon-vscode-plain colored"></i>

                    </div>
                    <div className='skill-icons'>
                        <i class="devicon-react-original colored"></i>
                    
                        <i class="devicon-nodejs-plain-wordmark colored"></i>
                    
                        <i class="devicon-npm-original-wordmark colored"></i>
                    
                        <i class="devicon-express-original colored"></i>
                    
                        <i class="devicon-bootstrap-plain colored"></i>
            
                        <i class="devicon-mysql-plain-wordmark colored"></i>
        
                        <i class="devicon-mongodb-plain colored"></i>

                        <i class="devicon-git-plain colored"></i>
                    
                        <i class="devicon-github-original colored"></i>
                    </div>
                    <br/>
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
