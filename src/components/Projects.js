import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'TravelThreads -WanderLust MegaProject - DevOps',
      description: 'MERN travel blog app on AWS EKS with 10+ DevOps technologies. Technology Used: Terraform, Docker, Jenkins, SonarQube, OWASP, Trivy, ArgoCD, Redis, AWS EKS, Helm.',
      link: 'https://github.com/Vaishnav88sk/TravelThreads-Wanderlust-project'
    },
    {
      title: 'Flask App Deployment on AWS with Docker and Kubernetes(EKS)',
      description: 'Two-tier containerized flask application deployed on AWS EC2, EKS with automation. Deployed with Dockerfile, Docker-Compose, AWS EKS, kubeadm with a scalable architecture.',
      link: 'https://github.com/Vaishnav88sk/two-tier-flask-app-deploy'
    },
    {
      title: 'Customer Complaint management ChatBot - AWS',
      description: 'AWS Lex powered traditional chatbot with response cards and integrated with AWS lambda.',
      link: 'https://github.com/Vaishnav88sk/product-complaint-chatbot'
    },
    {
      title: 'FlutterChat App - Advanced chat and file sharing application',
      description: 'A flutter framework-based app for chatting and media sharing (individually and in groups) with Firebase. Technology Used: Flutter, Firebase, Provider(State management).',
      link: 'https://github.com/Vaishnav88sk/flutterchat-app-project'
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
