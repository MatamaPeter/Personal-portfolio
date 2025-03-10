import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header() {
    const tabs = ["Home", "About", "Plans", "Blogs"];
    const location = useLocation();

    // Format tab name from path
    const formatTabName = (path) => {
        if (path === "/") return "Home";
        if (path.startsWith("/blogs")) return "Blogs"; // Fix: Keep Blogs active on detail pages
        return path
            .substring(1)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const currentTab = formatTabName(location.pathname);

    // Dark mode state (with localStorage)
    const [darkMode, setDarkMode] = useState(() => {
        try {
            return localStorage.getItem('theme') !== "light"; // Default to dark mode
        } catch (error) {
            console.error("Could not access localStorage:", error);
            return true;
        }
    });

    // Apply theme to body
    useEffect(() => {
        document.body.classList.toggle("light-theme", !darkMode);
    }, [darkMode]);

    // Toggle dark mode
    function toggleDarkMode() {
        const newMode = !darkMode;
        setDarkMode(newMode);
        try {
            localStorage.setItem("theme", newMode ? "dark" : "light");
        } catch (error) {
            console.error("Could not update localStorage:", error);
        }
        document.body.classList.toggle("light-theme", !newMode);
    }

    return (
        <div className="header-container">
            <Link to="/" className='logo-link'> 
                <img 
                    src={darkMode ? "my_portfolio_logo_light.svg" : "my_portfolio_logo_dark.svg"} 
                    alt="My-logo" 
                    className="logo" 
                    loading="lazy"
                />
            </Link>
            <div className='nav-bar'>
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index} className={currentTab === tab ? "active" : ""}>
                            <Link to={tab === "Home" ? "/" : `/${tab.toLowerCase()}`}>{tab}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <i 
                className="material-icons" 
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {darkMode ? "dark_mode" : "light_mode"}
            </i>
        </div>
    );
}

export default Header;
