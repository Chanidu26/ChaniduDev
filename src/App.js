import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Blog from './components/Blog';
import { useState } from'react';
import DarkMode from './components/Darkmode';
import Chatbot from './components/ChatBot';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark'); // Toggles the 'dark' class on the <html> element
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Skills />
      <Projects />
      <Contact />
      <DarkMode />
      <Chatbot />
    </div>
  );
}

export default App;
