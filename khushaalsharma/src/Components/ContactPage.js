import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Styles.css";

const ContactPage = () => {
    return(
        <>
            <Navbar/>
            <div className='row contactPage'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='mail'>
                        <h2>Curious?Feedback?Collaboration?Hire Me?</h2>
                        <a href='mailto:khushaalsharma1@gmail.com'><button className='btn btn-outline-secondary'>Send me an email</button></a>
                    </div>
                    <div className='resumeDownload'>
                        <h4>See my Resume here</h4>
                        <a href='https://drive.google.com/file/d/1bswRe-iKzSxVz2NKrginDuJE-8Ts7cs_/view?usp=sharing'><button className='btn btn-success'>My Resume</button></a>
                    </div>
                    <div>
                        <h4>My Social Media Links</h4>
                        <h6>Don't forget to follow me on Instagram. I am posting daily about my coding journey.</h6>
                        <a href='https://www.instagram.com/khushaal.builds'><button className='btn insta-btn'>Instagram</button></a>

                        <h6>Other Links</h6>
                        <div className='social'>
                            <a href='https://www.linkedin.com/in/khushaal-sharma/'><button className='btn btn-primary'>LinkedIn</button></a>
                        </div>
                        <div className='social'>
                            <a href='https://www.twitter.com/_khushaalsharma'><button className='btn btn-dark'>Twitter</button></a>
                        </div>
                        <div className='social'>
                            <a href='https://github.com/khushaalsharma'><button className='btn btn-secondary'>GitHub</button></a>
                        </div>
                    </div>
                    <div className='social'>
                        <h5>Looking forward to connecting with you guys!!😌</h5>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage
