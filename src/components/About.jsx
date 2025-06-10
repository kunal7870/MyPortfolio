import React from 'react';
// import image2 from '../assets/profilepic.jpg';

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20">
      <div className="container mx-auto flex items-center justify-center md:flex-row ">
        
        {/* Left Side - Profile + Skills */}
        {/* <div className="w-full md:w-1/3 flex flex-col gap-10">

          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-700">JavaScript</p>
                <progress className="w-full h-3 rounded overflow-hidden" value="50" max="100"></progress>
              </li>
              <li>
                <p className="text-gray-700">Tailwind CSS</p>
                <progress className="w-full h-3 rounded overflow-hidden" value="60" max="100"></progress>
              </li>
              <li>
                <p className="text-gray-700">React</p>
                <progress className="w-full h-3 rounded overflow-hidden" value="40" max="100"></progress>
              </li>
              <li>
                <p className="text-gray-700">CSS</p>
                <progress className="w-full h-3 rounded overflow-hidden" value="65" max="100"></progress>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Right Side - About Description */}
        <div className="w-full md:w-2/3 bg-slate-800 p-8 rounded-2xl shadow-md text-white">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="leading-relaxed text-gray-100">
          I'm a third-year B.Tech student in Information Technology at B.P. Poddar Institute of Management and Technology, Kolkata. My primary interest lies in Software Engineering and web development, and I’m always eager to explore new technologies, tools, and frameworks that enhance both the user experience and developer workflow.


            <br /><br />
            Apart from academics, I actively work on personal projects and enjoy collaborating on real-world challenges that push me to think critically and build practical solutions. I take pride in writing clean, maintainable code and believe in continuous learning to grow both technically and creatively.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
