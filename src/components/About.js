import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center ">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <div className="mt-0 text-center">
            <h1 className="text-4xl font-bold text-white">
              About Me
            </h1>
          </div>
          <div className="px-6 py-8">
            <p className="text-white text-lg leading-relaxed">
              Hi! I'm <span className="font-bold text-yellow-300">Chanidu</span>, 
              a passionate developer with a strong focus on creating efficient, scalable, and responsive solutions. 
              My journey started with a love for coding and evolved into a career where I get to explore new technologies, 
              solve problems, and contribute to impactful projects.
            </p>
            <p className="mt-4 text-white text-lg leading-relaxed">
              I specialize in web development, DevOps practices, and container orchestration, always striving to improve 
              both technical skills and soft skills. When I'm not coding, you'll find me exploring open-source projects, 
              learning new tools, or mentoring peers.
            </p>
            <p className="mt-4 text-white text-lg leading-relaxed">
              I'm excited to collaborate on projects that drive innovation and make a difference. 
              Let's connect and create something amazing together!
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About