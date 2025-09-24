import { useEffect, useState } from "react";

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "Problem Solver",
    "Tech Innovator",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="intro-section">
          <h1>
            Hello, I'm <span className="highlight">Patel Parthkumar</span>
          </h1>
          <h2 className="role-text">
            <span className="role-label">A </span>
            <span className="typing-text">{roles[currentRole]}</span>
          </h2>
        </div>

        <div className="description-section">
          <p className="main-description">
            Passionate developer crafting modern web applications with
            cutting-edge technologies. I transform ideas into elegant, scalable
            solutions that make a difference.
          </p>

          <div className="highlights-grid">
            <div className="highlight-item">
              <i className="fas fa-code"></i>
              <span>Clean Code</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-mobile-alt"></i>
              <span>Responsive Design</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-rocket"></i>
              <span>Fast Performance</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-users"></i>
              <span>User Focused</span>
            </div>
          </div>
        </div>

        <div className="action-section">
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Parth10P"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:your-email@example.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Home;
