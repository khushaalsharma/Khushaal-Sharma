import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../Components/MainPage';
import ProjectPage from '../Components/Project/ProjectPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainPage}/>
            <Route path='/projects' Component={ProjectPage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
