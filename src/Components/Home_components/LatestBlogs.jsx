function LatestBlogs() {
  return (
      <div>
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
         <div className="blog-dtls">
              <div className="blog-section-desc"> 
                  <div className="post-date">
                      Oct 27, 2023
                  </div>
                  <div className="post-desc">
                      My Desk Setup for 2023. Minimalist but functional.
                  </div>
                  <div className="post-date">
                      Oct 27, 2023
                  </div>
                  <div className="post-desc">
                      My Desk Setup for 2023. Minimalist but functional.
                  </div>
              </div>  
              <div className="blog-img">
                  <img src="computer.webp" alt="" />
              </div>
        </div>
        </div>
      </div>
        
    </div>
  )
}

export default LatestBlogs
