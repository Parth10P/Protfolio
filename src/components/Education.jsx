const Education = () => {
  const educationData = [
    {
      year: "Current",
      degree: "B.Tech in CSE (AI & ML)",
      field: "Computer Science Engineering",
      institution: "Newton School of Technology",
    },
    {
      year: "2023 - 2024",
      degree: "Higher Secondary Certificate",
      field: "Science",
      institution: "Kendriya Vidyalaya Ahmedabad Cantt",
    },
    {
      year: "2020 - 2021",
      degree: "Secondary School Certificate",
      field: "General",
      institution: "Kendriya Vidyalaya Ahmedabad Cantt",
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Education</span>
      </h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-box" style={{ "--i": index }}>
            <div className="education-year">{edu.year}</div>
            <h3>{edu.degree}</h3>
            <h4>{edu.field}</h4>
            <h5>{edu.institution}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
