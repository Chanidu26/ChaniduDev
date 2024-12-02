import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
        <section className="h-screen flex items-center justify-center  text-white">
        <div className="text-center px-6 md:px-12">
        <img
          src="https://via.placeholder.com/500"
          alt="Profile"
          className="rounded-lg shadow-lg"
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