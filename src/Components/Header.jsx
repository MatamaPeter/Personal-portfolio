import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header() {
    const tabs = ["Home", "About", "Goals", "Blogs"];
    const location = useLocation();
    const navRef = useRef(null);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [currentTab, setCurrentTab] = useState("Home");

    // Format tab name from path
    const formatTabName = (path) => {
        if (path === "/") return "Home";
        if (path.startsWith("/blogs")) return "Blogs";
        return path
            .substring(1)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    // Update indicator position
    useEffect(() => {
        const formattedTab = formatTabName(location.pathname);
        setCurrentTab(formattedTab);
        
        if (navRef.current) {
            const activeTab = navRef.current.querySelector(`li a[href="${formattedTab === "Home" ? "/" : `/${formattedTab.toLowerCase()}`}"]`);
            if (activeTab) {
                const parentLi = activeTab.parentElement;
                const navRect = navRef.current.getBoundingClientRect();
                const liRect = parentLi.getBoundingClientRect();
                
                setIndicatorStyle({
                    width: `${liRect.width}px`,
                    transform: `translateX(${liRect.left - navRect.left}px)`,
                    opacity: 1
                });
            }
        }
    }, [location.pathname]);

    // Dark mode state (with localStorage)
    const [darkMode, setDarkMode] = useState(() => {
        try {
            return localStorage.getItem('theme') !== "light";
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
            <div className='nav-bar' ref={navRef}>
                <ul>
                    {/* Sliding indicator */}
                    <div className="active-indicator" style={indicatorStyle} />
                    
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
                {darkMode ? "light_mode" : "dark_mode"}
            </i>
        </div>
    );
}

export default Header;