import Portfolio from './Home_components/Portfolio.jsx';
import HeroSection from './Home_components/Hero_Section.jsx';
import './home.css'
function Home() {
  return (
    <div className='home-container'>
      <HeroSection />
      <div className="portfolio-container">
        <h1>Portfolio</h1>
        <div className="portfolio-elements">
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
      </div>
    </div>
  )
}

export default Home
