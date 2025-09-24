import { useState } from "react";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        Patel Parthkumar
      </a>

      <div className="menu-btn" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <nav className={isMenuOpen ? "active" : ""}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#education"
          className={activeSection === "education" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("education");
          }}
        >
          Education
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
