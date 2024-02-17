import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Styles.css";

const Footer = () => {
    const ksClick = () => {
        window.location.href = "/";
    }

    const projectClick = () => {
        window.location.href = "/projects";
    }

    const skillsClick = () => {
        window.location.href ="/skills";
    }
    
    const aboutClick = () => {
        window.location.href = "/about";
    }

    const contactClick = () => {
        window.location.href = "/contact";
    }

    const handleLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/khushaal-sharma/";
    }

    const handleInsta = () =>{
        window.location.href = "https://www.instagram.com/khushaal.builds/";
    }

    const handleX = () => {
        window.location.href = "https://www.twitter.com/_khushaalsharma";
    }
    return (
        <footer>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-md-6 footer-data'>
                            <div className='footer-khushaal' onClick={ksClick}>Khushaal Sharma</div>
                            <div onClick={aboutClick}>About</div>
                            <div onClick={projectClick}>Projects</div>
                            <div onClick={skillsClick}>Skills</div>
                            <div onClick={contactClick}>Contact</div>
                        </div>
                        <div className='col-md-6'>
                            Social Media:
                            <div>
                                <div onClick={handleLinkedin}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </div>
                                <div onClick={handleInsta}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                </div>
                                <div onClick={handleX}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
            <div className='row'>
                <p>Made with ❤️</p>
                <p>©️ Khushaal Sharma 2020</p>
            </div>
        </footer>
    )
}

export default Footer
