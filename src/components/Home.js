import React from 'react'
import profile from '../assets/profile.JPG'
const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
        <section className="h-screen flex items-center justify-center text-white">
        <div className="text-center px-6 md:px-12 mt-0">
        <img
          src={profile}
          alt="Profile"
          className="mx-auto rounded-lg shadow-lg w-45 h-auto sm:w-48 md:w-60 lg:w-72"
        />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Chanidu
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Hi, I'm a Developer & Designer specializing in building exceptional web applications.
          </p>
          <div >
          <a
            href="#about"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Learn More
          </a>
          
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home