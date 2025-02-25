import HeroSection from './Home_components/Hero_Section.jsx';
import Portfolio from './Home_components/Portfolio.jsx';
import Skills from './Home_components/Skill.jsx';

import './home.css'
function Home() {
 
  return (
    <div className='home-container'>
      <HeroSection />
      <Portfolio />
      <Skills />
    </div>
  )
}

export default Home
