import './education.css';
const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      years: "March 2025",
      degree: "Cybersecurity and Emerging Technologies Awareness Training",
      institution: "ICT Authority, Kenya",
      description: "A comprehensive training on cybersecurity and emerging technologies."
    },
    {
      id: 2,
      years: "2020 - 2024",
      degree: "Bachelor of Science in Software Engineering",
      institution: "Kirinyaga University",
      description: "Specialized in full-stack development with a focus on modern web technologies and design principles."
    },
    {
      id: 3,
      years: "2018 (Nov-Dec)",
      degree: "Basics in web design and development",
      institution: "Zalego Academy",
      description: "Built a strong foundation in Web fundamentals."
    }
  ];

  return (
    <div className="education-timeline">
      {educationData.map(item => (
        <div key={item.id} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <span className="timeline-date">{item.years}</span>
            <h4 className="timeline-title">{item.degree}</h4>
            <p className="timeline-institution">{item.institution}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;