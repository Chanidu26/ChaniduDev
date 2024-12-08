import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
