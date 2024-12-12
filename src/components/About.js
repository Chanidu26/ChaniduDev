import React from 'react';
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
const About = () => {
  return (
    <section id="about">
    <div className="min-h-screen dark:bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-2 md:px-6 py-6">
        {/* Adjusted the margin-top */}
        <div className="max-w-4xl py-5 mx-auto dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="mt-2 text-center"> {/* Reduced margin */}
            <h1 className="text-4xl font-bold dark:text-white">About Me</h1>
          </div>
          <div className="px-4 md:px-6 py-6">
            <p className="dark:text-white text-lg leading-relaxed">
              Hi! I'm <span className="font-bold text-yellow-300">Chanidu</span>, 
              a passionate developer with a strong focus on creating efficient, scalable, and responsive solutions. 
              My journey started with a love for coding and evolved into a career where I get to explore new technologies, 
              solve problems, and contribute to impactful projects.
            </p>
            <p className="mt-4 dark:text-white text-lg leading-relaxed">
              I specialize in web development, DevOps practices, and container orchestration, always striving to improve 
              both technical skills and soft skills. When I'm not coding, you'll find me exploring open-source projects, 
              learning new tools, or mentoring peers.
            </p>
            <p className="mt-4 dark:text-white text-lg leading-relaxed">
              I'm excited to collaborate on projects that drive innovation and make a difference. 
              Let's connect and create something amazing together!
            </p>
            <p className='mt-4 dark:text-white text-lg leading-relaxed flex'>
              <IoSchoolSharp className='mr-2 mt-1 w-10 lg:mr-0 '/> Higher Education - Bsc (Hons) in Computer Engineering University of Ruhuna (2022 - Present)
             </p>
             <p className='mt-4 dark:text-white text-lg leading-relaxed flex lg:ml-3'>
             <FaSchool className='mr-2 mt-1' /> School Education - Mahinda College (2007 - 2020)
                
             </p>
             <li className='dark:text-white ml-4'>GCE Advanced Level 2020 Results - AAA</li>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
