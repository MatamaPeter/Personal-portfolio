import skillItem from '../../assets/skills'
function Skills() {

  const skillsElement = skillItem.map((skill,index) => {
    return(
    <div className="skill-item" key={index}>
        <img src={skill.imgSrc} alt={skill.label} />
        <div className="skill-info">
          <div className="skill-label">{skill.label}</div>
          <div className="skill-desc">{ skill.desc}</div>
        </div>
      


      </div>
    )
  })
  return (
    <>
      <div className="skill-container">
        <h1>Essential tools I use</h1>
        <p>Discover the powerful tools and tecnologies I use to create exceptional, high-performing websites</p>
        <div className="skill-items">
          {skillsElement}
        </div>
      </div>
    </>
  )
}

export default Skills
