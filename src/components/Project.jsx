import React, { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import '../App.css'; 

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectList = [
    {
      title: 'React-iTask',
      image: project2,
      description: 'Simple to-do app using React and Tailwind with local storage support.',
      demo: '#https://react-itask.netlify.app/',
      code: 'https://github.com/kunal7870/todo-react-app',
    },
    {
      title: 'Chat App',
      image: project1,
      description: 'A real-time chat app using React, Node.js, and Socket.io.',
      demo: 'https://chat-app-frontend-5toi.onrender.com',
      code: 'https://github.com/kunal7870/Chat-App',
    },
    
    {
      title: 'Portfolio Website',
      image: project3,
      description: 'A personal portfolio site built with React and smooth scroll.',
      code: '',
    },
  ];

  return (
    <section id="Project" className="px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-300">My Projects</h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 md:gap-10 min-w-[600px] md:min-w-full">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm">
                        Demo
                      </button>
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <button className="border border-black text-black px-3 py-1 rounded hover:bg-black hover:text-white text-sm">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed Project"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
