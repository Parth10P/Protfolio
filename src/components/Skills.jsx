const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 90, icon: "fab fa-html5" },
    { name: "CSS", level: 85, icon: "fab fa-css3-alt" },
    { name: "JavaScript", level: 80, icon: "fab fa-js-square" },
    { name: "React", level: 75, icon: "fab fa-react" },
    { name: "React Native", level: 60, icon: "fab fa-react" },
    { name: "Node.js", level: 70, icon: "fab fa-node-js" },
    { name: "Python", level: 75, icon: "fab fa-python" },
    { name: "MySQL", level: 65, icon: "fas fa-database" },
    { name: "Express", level: 70, icon: "fas fa-server" },
    { name: "Git", level: 80, icon: "fab fa-git-alt" },
    { name: "Open Source Contributor", level: 75, icon: "fab fa-github" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skillsData.map((skill, skillIndex) => (
            <div key={skillIndex} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <div className="skill-progress">
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
