import HeroSection from './Home_components/Hero_Section.jsx';
import Portfolio from './Home_components/Portfolio.jsx';
import LatestBlogs from './Home_components/LatestBlogs.jsx';

import './home.css'
function Home() {
 
  return (
    <div className='home-container'>


      <HeroSection />
      <Portfolio />
      <LatestBlogs />


      

    </div>
  )
}

export default Home
