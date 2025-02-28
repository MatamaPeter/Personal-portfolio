import projects from "../../assets/portfolio"; // Import the JS file

function Portfolio() {
  return (   
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="portfolio-elements">
            {projects.map((project) => (
                <div key={project.id} className="proj-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className="proj-img">
                            <img loading="lazy" src={project.image} alt={project.title} />
                        </div>
                        <div className="title-desc">
                            <div className="proj-title">{project.title}</div>
                            <div className="proj-desc">{project.description}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
      </div>
    );
}

export default Portfolio;
