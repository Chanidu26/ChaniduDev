import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Get in Touch
        </h2>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full mt-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-300 text-gray-900 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-gray-300 mt-2">1234 Your Street, Your City</p>
              <p className="text-gray-300">contact@yourdomain.com</p>
              <p className="text-gray-300">+123 456 7890</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/chanidukarunarathna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Chanidu26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-500 text-2xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.behance.net/chanidukarunarathna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 text-2xl"
              >
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact