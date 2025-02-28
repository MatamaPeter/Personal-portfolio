import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header() {
    const tabs = ["Home", "About", "Plans", "Blogs"];
    
    // Get current location for active tab highlighting
    const location = useLocation();

    // Extract pathname and convert it to a proper format for active state
    const currentTab = location.pathname === "/" ? "Home" : location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

    // Set darkMode to true by default, but allow it to be overwritten by localStorage if available
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === "false" ? false : true; // darkMode will be true unless localStorage has "false"
    });

    useEffect(() => {
        document.body.classList.toggle("light-theme", !darkMode);
    }, [darkMode]);

    function toggleDarkMode() {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("theme", newMode);
        document.body.classList.toggle("light-theme", !newMode);
    }

    return (
        <div className="header-container">
            <img 
                src={darkMode ? "my_portfolio_logo_light.svg" : "my_portfolio_logo_dark.svg"} 
                alt="My-logo" 
                className="logo" 
                loading="lazy"
            />
            <div className='nav-bar'>
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index} className={currentTab === tab ? "active" : ""}>
                            <Link to={tab === "Home" ? "/" : `/${tab.toLowerCase()}`}>{tab}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <i className="material-icons" onClick={toggleDarkMode}>
                {darkMode ? "dark_mode" : "light_mode"}
            </i>
        </div>
    );
}

export default Header;
