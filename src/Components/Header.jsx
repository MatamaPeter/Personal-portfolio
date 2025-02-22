import { useState } from "react";
import "./Header.css";

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="header-container">
            <img src="my_portfolio_logo_light.svg" alt="My-logo" className="logo" />
            
            <i className="material-icons menu-icon" onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? "close" : "menu"}
            </i>

            <div className={`nav-bar ${navOpen ? "open" : ""}`}>
                <ul>
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#plans">Future Plans</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                </ul>
            </div>

            <i className="material-icons dark-mode-icon" onClick={() => document.body.classList.toggle("dark-theme")}>
                dark_mode
            </i>
        </div>
    );
}

export default Header;
