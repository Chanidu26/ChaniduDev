import React from "react";
import profile from "../assets/profile.JPG";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={profile} // Replace with your photo URL
            alt="Chanidu"
            className="w-60 h-60 rounded-full border-2 border-white shadow-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-white mb-4">
            Hi, I'm <span className="text-yellow-300">Chanidu</span>
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl">
            I'm a passionate developer specializing in <strong>Web Development</strong>, 
            <strong> DevOps</strong>, and creating beautiful, responsive, and scalable solutions.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/chanidukarunarathna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Chanidu26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-500 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.behance.net/chanidukarunarathna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-300 text-2xl"
            >
              <i className="fab fa-behance"></i>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a
              href="#portfolio"
              className="bg-yellow-300 text-gray-900 py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#resume"
              className="bg-white text-gray-900 py-3 px-6 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
