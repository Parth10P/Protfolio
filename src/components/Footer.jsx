const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {currentYear} Patel Parthkumar 😇. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
