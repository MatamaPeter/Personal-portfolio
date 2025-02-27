import './about.css';
import ImageCards from './AboutComponenets/ImageCards';
import EducationTimeline from './AboutComponenets/Education.jsx';

function About() {
  return (
    <div className='about-container'>
      <h1>About Me</h1>
      <p>A glimpse into who I am</p>
      <ImageCards />
      
      <div className="about-info">
        <div className="about-details">
          <p>Hi, I&apos;m Peter Matama from Kenya! My fascination with computers began at a young age, which naturally ignited my passion for technology. I pursued a career in tech by studying software engineering, focusing on full-stack development and design. When I&apos;m not at my desk, you&apos;ll find me playing pool, traveling, or enjoying some great music!</p>
        </div>
        
        <div className="education">
          <h3>Education</h3>
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
}

export default About;