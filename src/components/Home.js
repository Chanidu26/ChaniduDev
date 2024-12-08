import React from 'react'
import profile from '../assets/profile.JPG'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={profile} // Replace with your photo URL
            alt="Your Name"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-white mb-4">
            Hi, I'm <span className="text-yellow-300">Chanidu</span>
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl">
            I'm a passionate developer specializing in <strong>Web Development</strong>, 
            <strong> DevOps</strong>, and creating beautiful, responsive, and scalable solutions.
          </p>
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

        {/* Footer Section */}
        <footer className="mt-12">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Home