import React from 'react'
import projects from '../data/projects'

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          My Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-gray-700 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4">
                  <h3 className="font-medium text-white">Technologies:</h3>
                  <div className="flex flex-wrap mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-yellow-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-6 bg-yellow-300 text-gray-900 py-2 rounded hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects