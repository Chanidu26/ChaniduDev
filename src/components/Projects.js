import React from 'react'
import projects from '../data/projects'
import Projectcard from '../cards/projectcard'
const Projects = () => {
  return (
    <section id="projects">
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          My Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Projectcard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Projects