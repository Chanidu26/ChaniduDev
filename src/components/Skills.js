import React from 'react';
import { FaNodeJs, FaAws, FaDocker, FaGit, FaJenkins, FaLinux, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiAnsible, SiTerraform, SiKubernetes } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Node.js', color: 'bg-green-600', icon: <FaNodeJs className="text-4xl text-white" /> },
    { name: 'Ansible', color: 'bg-red-600', icon: <SiAnsible className="text-4xl text-white" /> },
    { name: 'Terraform', color: 'bg-purple-600', icon: <SiTerraform className="text-4xl text-white" /> },
    { name: 'AWS', color: 'bg-orange-600', icon: <FaAws className="text-4xl text-white" /> },
    { name: 'Java', color: 'bg-blue-600', icon: <FaJava className="text-4xl text-white" /> },
    { name: 'Python', color: 'bg-yellow-600', icon: <FaPython className="text-4xl text-white" /> },
    { name: 'Kubernetes', color: 'bg-blue-500', icon: <SiKubernetes className="text-4xl text-white" /> },
    { name: 'Docker', color: 'bg-blue-800', icon: <FaDocker className="text-4xl text-white" /> },
    { name: 'Linux', color: 'bg-gray-700', icon: <FaLinux className="text-4xl text-white" /> },
    { name: 'Git', color: 'bg-red-500', icon: <FaGit className="text-4xl text-white" /> },
    { name: 'Jenkins', color: 'bg-green-800', icon: <FaJenkins className="text-4xl text-white" /> },
    { name: 'Github', color: 'bg-green-500', icon: <FaGithub className="text-4xl text-white" /> },
  ];

  return (
    <section id='skills'>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${skill.color} hover:scale-105 transform transition duration-300`}
            >
              {skill.icon}
              <span className="text-white text-lg font-semibold mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
