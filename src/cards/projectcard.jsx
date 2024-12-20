import React from 'react'

const Projectcard = ({id,image,title,description,technologies,link}) => {
  return (
         <div
              key={id}
              className="dark:bg-gray-800 border border-gray-300 shadow-2xl border dark:border-gray-700 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h2 className="text-xl font-bold dark:text-white">
                  {title}
                </h2>
                <p className="dark:text-gray-300 mt-1">{description}</p>
                <div className="mt-2">
                  <h3 className="font-medium dark:text-white">Technologies:</h3>
                  <div className="flex flex-wrap mt-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 dark:bg-gray-700 text-yellow-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-3 bg-yellow-300 text-gray-900 py-2 rounded hover:bg-yellow-400"
                >
                  View Project
                </a>
              </div>
            </div>
  )
}

export default Projectcard