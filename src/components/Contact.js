import React from 'react'
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 pt-12 mt-10">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className=" dark:bg-gray-800 p-5 lg:p-8 rounded-lg shadow-2xl">
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
                    className="w-full mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
                    className="w-full mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
                    className="w-full mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
            <div className="flex flex-col justify-center items-center space-y-8">
              {/* Contact Information */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="flex items-center space-x-3  mb-4 ">
                  <FaEnvelope className="text-yellow-300 text-xl" />
                  <p className="dark:text-gray-300">ckkarunarathna@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3 ">
                  <FaPhone className="text-yellow-300 text-xl" />
                  <p className="dark:text-gray-300">+94 76 264 0254</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-6 right-0 ">
                <a
                  href="https://www.linkedin.com/in/chanidukarunarathna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-300 text-3xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Chanidu26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-300 text-3xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.behance.net/chanidukarunarathna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-300 text-3xl"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="dark:bg-gray-900 py-10">
        <p className="text-center text-gray-500 text-[14px] lg:text-[16px]">
          Copyright © 2024 ChaniduDev. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
