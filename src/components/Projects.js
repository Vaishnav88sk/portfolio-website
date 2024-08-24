import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Coming Soon...',
      link: 'https://github.com/Vaishnav88sk/'
    },
    {
      title: 'Project 2',
      description: 'Coming Soon...',
      link: 'https://github.com/Vaishnav88sk/'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
