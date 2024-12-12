import React from 'react'

const blogcard = ({id , image , title , description , date , tag}) => {
  return (
    <div
            key={id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
            />
            {/* Blog Content */}
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">
                Published {date}
              </p>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-300 mb-4">{description}</p>
              {/* Blog Tag */}
              <span className="inline-block bg-yellow-300 text-xs font-medium text-black py-1 px-3 rounded-full">
                #{tag}
              </span>
            </div>
          </div>
  )
}

export default blogcard