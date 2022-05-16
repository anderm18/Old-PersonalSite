import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/navbar';
import VideoBg from "reactjs-videobg";
import vid from './assets/tri.webm';
import cover from './assets/cover.png';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Courses from './pages/Courses';

import './App.css';

function App() {
  return (
    <>
      <VideoBg poster={cover}>
        <VideoBg.Source src ={vid} type="video/webm"/>
      </VideoBg> 
      <Router>
        <Footer/>
          <NavigationBar />
            <Routes>  
              <Route path ="/" element={<Home/>}/>
              <Route path ='/home' element={<Home/>}/>
              <Route path ='/projects' element={<Projects/>}/>
              <Route path ='/courses' element={<Courses/>}/>
            </Routes>
      </Router>
    </>
  );
}

export default App;
