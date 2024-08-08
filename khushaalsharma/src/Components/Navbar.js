import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../Images/1-removebg-preview.png";
import github from "../Images/github.png";
import "./Styles.css"

const Navbar = () => {

    const githubClick = () => {
        window.location.href = "https://github.com/khushaalsharma";
    }

    const ksClick = () =>{
        window.location.href = "/";
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <div className='logo-khushaal' onClick={ksClick}>
                        <img src={logo}/>
                    </div>
                </a>
                <div className='githubBtn' onClick={githubClick}>
                    <img src={github} alt="Khushaal's GitHub"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
