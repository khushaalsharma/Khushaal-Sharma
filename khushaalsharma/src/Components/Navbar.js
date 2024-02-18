import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../Images/1-removebg-preview.png";
import "./Styles.css"

const Navbar = () => {

    const projectClick = () => {
        window.location.href = "/projects";
    }
    
    const aboutClick = () => {
        window.location.href = "/about";
    }

    const contactClick = () => {
        window.location.href = "/contact";
    }

    const ksClick = () =>{
        window.location.href = "/";
    }


    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <div className='logo-khushaal' onClick={ksClick}>
                        <img src={logo}/>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" onClick={aboutClick}>
                            <a class="nav-link" aria-current="page">About</a>
                        </li>
                        <li class="nav-item" onClick={projectClick}>
                            <a class="nav-link" aria-current="page">Projects</a>
                        </li>
                        <li className='nav-item' onClick={contactClick}>
                            <a className='nav-link' aria-current="page">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
