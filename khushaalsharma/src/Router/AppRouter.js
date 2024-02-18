import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../Components/MainPage';
import ProjectPage from '../Components/Project/ProjectPage';
import AboutPage from '../Components/AboutPage';
import ContactPage from '../Components/ContactPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainPage}/>
            <Route path='/projects' Component={ProjectPage}/>
            <Route path='/about' Component={AboutPage}/>
            <Route path='/contact' Component={ContactPage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
