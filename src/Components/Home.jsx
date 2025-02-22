import HeroSection from './Home_components/Hero_Section.jsx';
import Portfolio from './Home_components/Portfolio.jsx';
import LatestBlogs from './Home_components/LatestBlogs.jsx';

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


      <div className="blog-container">
        <h1>
          <a href="">Latest Blogs</a>
          <i className="material-icons" >arrow_outward</i>
        </h1>
        <span>
          I occasionally write about programming, productivity, and more. <br />
          Check me out and subscribe to stay up to date.
        </span>   
        <div className="latest-blog-elements">
          <LatestBlogs />
        </div>
      </div>

    </div>
  )
}

export default Home
