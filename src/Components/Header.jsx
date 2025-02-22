import { useState } from 'react';
import './Header.css';
function Header() {

    // Global Variables
    const tabs = ["Home", "About", "Plans", "Blogs"]
    
    // States
    const [isActive, setIsActive] = useState("Home");
    const [darkMode, setDarkMode] = useState(true);


    //Callback functions    
   const tabsElement = tabs.map((tab, index) => {
            return(
                <li
                    key={index}
                    className={isActive===tab ? "active": ""}
                    onClick={() => setIsActive(tab)}
                >
                <a href="#">{tab}</a></li>
            )
    })

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        document.body.classList.toggle("light-theme");
    }
    
    
    
    

  return (
      <>
          <div className="header-container">
              <img src={darkMode ? "my_portfolio_logo_light.svg" : "my_portfolio_logo_dark.svg"} alt="My-logo" className="logo" />
              <div className='nav-bar'>
                  <ul>
                      {tabsElement}
                  </ul>
              </div>
              <i className="material-icons" onClick={toggleDarkMode}>{darkMode?"dark_mode":"light_mode"}</i>

          </div>
      </>
  )
}

export default Header
