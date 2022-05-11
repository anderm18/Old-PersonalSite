import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home';

import './App.css';



function App() {

  return (
    
    <Router>
      <Footer/>
      <NavigationBar />
      <Routes>  
          <Route  path ='/' exact component={Home}/>
      </Routes>
      <Routes>
        <Route  path ='/home' exact component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
