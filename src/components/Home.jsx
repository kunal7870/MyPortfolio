import React from 'react';
import profilepic from '../assets/mypic3.webp';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="px-6 md:px-36 py-10">
      <div className="home-section flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="frontIntro max-w-xl">
          <p className="font-semibold text-yellow-600 leading-loose">HELLO!</p>
          <h1 className="name text-white font-extrabold text-5xl md:text-6xl leading-relaxed">
            I'm <span className="text-yellow-400">Kunal Kumar Verma</span>
          </h1>
          <div className="role text-white font-mono text-2xl md:text-3xl leading-relaxed">
            <Typewriter
              words={['A FrontEnd Developer', 'A React Developer', 'A Tech Enthusiast']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <button className="text-black rounded-3xl font-serif font-bold bg-yellow-400 px-6 py-2 mt-6 hover:bg-yellow-300 transition duration-300">
            Open for Internship
          </button>
          <div className="flex justify-start space-x-6 mt-8 text-3xl text-white">
        <a href="https://www.linkedin.com/in/kunal-kumar-verma/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://github.com/kunal7870" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a href="kunal33grd@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaCode className="hover:text-orange-400 transition-colors duration-300" />
        </a>
      </div>
        </div>

        {/* Image Section */}
        <div className="image1">
          <img
            className="rounded-3xl w-72 h-64 object-cover  shadow-slate-900 shadow-xl"
            src={profilepic}
            alt="Kunal Kumar Verma"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
