// Resume.js
import React from 'react';

const Resume = () => {
	return (
		<section id="resume" className="py-16 px-6 md:px-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-10  text-yellow-300">Resume</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
					{/* Education */}
					<div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md ">
						<h3 className="text-xl font-semibold text-black dark:text-gray-200 mb-2">Education</h3>
						<p className="text-gray-800 dark:text-gray-400">B.Tech in Information Technology</p>
						<p className="text-gray-900 dark:text-gray-300">B.P. Poddar Institute of Management and Technology</p>
						<p className="text-gray-900 dark:text-gray-300">2022-2026 (Expected)</p>
					</div>

					{/* Skills */}
					<div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
						<h3 className="text-xl font-semibold text-black dark:text-gray-200 mb-2">Skills</h3>
						<ul className="list-disc list-inside  text-gray-900 dark:text-gray-400 grid grid-cols-1 gap-1">
							<li>HTML, CSS, JavaScript</li>
							<li>Node.js, React.js, Express.js</li>
							<li>C, Java</li>
							<li>Git, GitHub</li>
						</ul>
					</div>

					{/* Experience */}
					<div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
						<h3 className="text-xl font-semibold text-black dark:text-gray-200 mb-2">Experience</h3>
						<p className="text-gray-900 dark:text-gray-400">Worked on personal project/web apps including a real-time chat application using React, Express, and Socket.io.</p>
						<p className="text-gray-700 dark:text-gray-500">Deployed on Render.</p>
					</div>

					{/* Certifications */}
					<div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
						<h3 className="text-xl font-semibold text-black dark:text-gray-200 mb-2">Certifications</h3>
						<ul className="list-disc list-inside text-gray-900 dark:text-gray-400">
							<li>Java fundamentals by scalar</li>
							<li>Git & GitHub Mastery</li>
							<li>Python fundamentals by Scalar</li>
						</ul>
					</div>
				</div>

				{/* Resume Download Button */}
				<div className="text-center mt-6">
					<a 
						href="./public/resume.pdf"
						download 
						className="inline-block px-6 py-3  bg-yellow-400 text-black rounded-full hover:bg-gray-800 transition duration-300"
					>
						Download Resume
					</a>
				</div>

			</div>
		</section>
	);
};

export default Resume;
