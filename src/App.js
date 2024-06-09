import { BrowserRouter as Router } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
