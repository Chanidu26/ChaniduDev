import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import projects from '../data/projects';
import Projectcard from '../cards/projectcard';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <section id="projects">
      <div className="min-h-screen text:bg-gray-900 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-6">
          <h1
            className="text-4xl font-bold text-center dark:text-white mb-8"
            data-aos="fade-up"
          >
            My Portfolios
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-3">
            {projects.map((project, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 100} key={project.id}>
                <Projectcard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
