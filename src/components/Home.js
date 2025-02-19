import React from "react";
import profile from "../assets/profile.jpg";
import { useTypewriter } from "react-simple-typewriter"
import { IoMdCloudDownload } from "react-icons/io";
const Home = () => {
    const [ text ] = useTypewriter({
      words: ['DevOps', 'Cloud', 'Fullstack', 'ML and AI'],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
    });
  return (
    <section id="home">
    <div className="min-h-screen text-black dark:bg-gray-900 dark:text-gray-100  flex items-center justify-center">
      <div className="container mx-auto px-6 text-center mt-20">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={profile}
            alt="Chanidu"
            className="w-60 h-60 rounded-full border-2 border-white shadow-lg mb-6 "
          />
          <h1 className="text-4xl font-bold dark:text-white mb-4">
            Hi, I'm <span className="text-yellow-300">Chanidu</span>
          </h1>
          <h6 className="text-2xl font-bold dark:text-white mb-4">
            A <span className="text-yellow-300">{text}</span> Engineer
          </h6>
          <p className="text-sm lg:text-lg dark:text-gray-200 mb-6 max-w-2xl">
            I'm a passionate tech enthusiast experience working in <strong>DevOps </strong>, 
            <strong>Cloud Computing</strong>, <strong>Full Stack Development, Ai and Machine Learning</strong> and creating streamlined Software solutions.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/chanidukarunarathna/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-yellow-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Chanidu26"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-yellow-300 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://medium.com/@chanidukarunarathna"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-yellow-300 text-2xl"
            >
              <i className="fab fa-medium"></i>
            </a>
            <a
              href="https://www.behance.net/chanidukarunarathna"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-yellow-300 text-2xl"
            >
              <i className="fab fa-behance"></i>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-yellow-300 text-gray-900 py-2 px-4 lg:py-3 lg:px-4  rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition duration-300"
              
            >
              View Portfolios
            </a>
            <a
              href="https://drive.google.com/drive/folders/186KAj5X9pzCN6SjVZTvmcFsaBrNCeqpK?usp=sharing"
              className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-2 px-4 lg:py-3 lg:px-4 rounded-full shadow-md  hover:shadow-lg transition duration-300"
            >
              <span className="flex items-center justify-center gap-2">Download CV <IoMdCloudDownload className="text-2xl" /> </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
