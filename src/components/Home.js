import React from 'react'
import profile from '../assets/profile.JPG'
const Home = () => {
  return (
    <div className=" dark:bg-gray-900">
    <section className="flex items-center justify-center text-white py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="rounded-lg shadow-lg w-64 h-auto sm:w-72 md:w-80 lg:w-96"
          />
        </div>
  
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
            Hi, I'm Chanidu
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Hi, I'm a Developer & Designer specializing in building exceptional web applications.
          </p>
          <div>
            <a
              href="#about"
              className="px-8 py-3 bg-white text-stone-950 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home