import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "patel.parthkumar@adypu.edu.in",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 9913320793",
      link: "tel:+9 9913320793",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Pune, Maharashtra",
      link: "#",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/patel_parthkumar",
      link: "https://www.linkedin.com/in/patel-parthkumar-5b3362314/",
    },
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussing new opportunities and interesting
            projects. Feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item" style={{ "--i": index }}>
                <div className="info-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="info-content">
                  <h4>{info.title}</h4>
                  <a href={info.link}>{info.value}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="input-box">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
