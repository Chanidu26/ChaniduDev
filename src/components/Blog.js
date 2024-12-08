import React from 'react'
import blogs from '../data/blogs'

const Blog = () => {
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">My Blog</h1>
      </header>

      {/* Blog Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            {/* Blog Content */}
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">
                Published {blog.date}
              </p>
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              {/* Blog Tag */}
              <span className="inline-block bg-yellow-300 text-xs font-medium text-black py-1 px-3 rounded-full">
                #{blog.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog