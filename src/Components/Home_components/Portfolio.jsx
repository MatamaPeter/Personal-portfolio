/*eslint-disable react/prop-types*/
function Portfolio(props) {


  return (
    
          <div className="proj-container">
            <a href={props.link}>
                  <div className="proj-img"><img src={props.image} alt={props.title} /></div>
                  <div className="title-desc">
                    <div className="proj-title">{props.title}</div>
                    <div className="proj-desc">
                       {props.description}
                    </div>
                  </div>
            </a>
    </div>
    

  )
}

export default Portfolio
