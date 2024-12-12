import React from 'react'
import blogs from '../data/blogs'
import Blogcard from '../cards/blogcard'

const Blog = () => {
  
  return (
    <section id='blog'>
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-100 py-12 ">
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">Featured</h1>
      </header>

      {/* Blog Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {blogs.map((blog) => (
          < Blogcard id = {blog.id} image={blog.image} title={blog.title}  description={blog.description} date={blog.date}  tag={blog.tag}/>
        ))}
      </div>
      
    </div>
  </section>
  )
}

export default Blog