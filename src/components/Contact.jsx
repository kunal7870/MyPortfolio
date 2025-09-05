import React, { useState } from 'react';

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add email handling logic here (e.g., emailjs or backend API)
		alert('Message sent!');
		setForm({ name: '', email: '', message: '' });
	};

	return (
		<section id="Contact" className=" text-white px-6 md:px-20 ">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12 text-yellow-300">Contact Me</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Contact Form */}
					<form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md rounded-lg p-6">
						<div>
							<label htmlFor="name" className="block text-sm font-semibold text-gray-300">Name</label>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="w-full mt-1 px-4 py-2 rounded-lg bg-white bg-opacity-60 text-black focus:outline-none"
							/>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="w-full mt-1 px-4 py-2 rounded-lg bg-white bg-opacity-60 text-black focus:outline-none"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-semibold text-gray-300">Message</label>
							<textarea
								name="message"
								rows="6"
								value={form.message}
								onChange={handleChange}
								required
								className="w-full mt-1 px-4 py-2 rounded-lg bg-white bg-opacity-60 text-black focus:outline-none"
							></textarea>
						</div>

						<div className="flex justify-center">
							<button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500">
								Send Message
							</button>
						</div>
					</form>

					{/* Contact Info */}
					<div className="space-y-6">
						<div>
							<h3 className="text-2xl font-bold mb-2 text-white">Get in Touch</h3>
							<p className="text-gray-300">
								Feel free to reach out for collaborations or just a friendly hello!
							</p>
						</div>
						<div className="text-gray-300">
							<p><strong>Email:</strong> kunal.verma@example.com</p>
							<p><strong>Phone:</strong> +91-9876543210</p>
							<p><strong>Location:</strong> Kolkata, India</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
