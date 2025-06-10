import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Project';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Extra from './components/Extra';

function App() {
  return (
    <>
      {/* Gradient background container */}
      <div className="min-h-screen text-white" >
        <Navbar />
        <div id="Home" className="text-white min-h-screen pt-20">
          <Home />
        </div>
        <div id="About" className="text-white min-h-screen flex justify-center items-center">
          <About />
        </div>
        <div id="Resume" className="text-white min-h-screen py-6">
          <Resume />
        </div>
        <div id="Project" className="text-white min-h-screen py-6">
          <Projects />
        </div>
        <div id="Contact" className="text-white min-h-screen py-6">
          <Contact />
        </div>
        <Extra/>
        <ScrollToTop/>
      </div>
    </>
  );
}

export default App;


