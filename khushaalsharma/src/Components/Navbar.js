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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <div className='logo-khushaal' onClick={ksClick}>
                        <img src={logo}/>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={aboutClick}>
                            <a className="nav-link" aria-current="page">About</a>
                        </li>
                        <li className="nav-item" onClick={projectClick}>
                            <a className="nav-link" aria-current="page">Projects</a>
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
