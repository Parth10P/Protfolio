const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Shuttle Tracker",
      description:
        "Full-Stack Web App with live GPS tracking, pickup notifications, and class-schedule integration for seamless campus transit planning.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "GPS API"],
      liveUrl: "https://shuttle-tracker-gamma.vercel.app/",
      githubUrl: "https://github.com/nst-sdc/Shuttle_Tracker.git",
      category: "Full-Stack",
    },
    {
      id: 2,
      title: "CodeTrackr",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Node.js", "MySQL"],
      liveUrl: "https://codetrackr.netlify.app/",
      githubUrl: "https://github.com/Parth10P/CodeTrackr",
      category: "Web App",
    },
    {
      id: 3,
      title: "Art Gallery",
      description:
        "Responsive art gallery website showcasing creative works with modern design and smooth user experience.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      liveUrl: "https://parth10p.github.io/Art_gallery/",
      githubUrl: "https://github.com/Parth10P/Art_gallery",
      category: "Frontend",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            {/* Card Header with Icon and Category */}
            <div className="card-header">
              <div className="project-icon">
                <i className="fas fa-code"></i>
              </div>
              <span className="project-category">{project.category}</span>
            </div>

            {/* Card Body */}
            <div className="card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Technology Stack */}
              <div className="tech-stack">
                <h4 className="tech-title">Built with:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer with Action Buttons */}
            <div className="card-footer">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn btn-live"
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn btn-code"
              >
                <i className="fab fa-github"></i>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <a href="#contact" className="btn btn-primary">
          <i className="fas fa-envelope"></i>
          Let's Work Together
        </a>
        <a
          href="https://github.com/Parth10P"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <i className="fab fa-github"></i>
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
