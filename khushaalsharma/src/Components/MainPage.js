import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Styles.css";
import Typewriter from './TypeWriter';

const MainPage = () => {
  
  return (
    <>
        <Navbar/>
        <div className='row mainpage'>
            <div className='col-md-2'></div>
            <div className='col-md-8 mainpage-text'>
                <h1><Typewriter text="Hi I am Khushaal" typingSpeed={100}/></h1>
                <div className='myDesc'>
                    <h4>A Programmer</h4>
                    <h4>A College Student</h4>
                    <h4>An Entrepreneurship Enthusiast</h4>
                    <h4>A Content Creator</h4>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
        <Footer/>
    </>
  )
}

export default MainPage
