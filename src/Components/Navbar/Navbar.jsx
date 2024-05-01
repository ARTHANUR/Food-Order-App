import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../Assets/assets";

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" />
            <ul>
                <li onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>
                    Home
                </li>
                <li onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>
                    <a href="#explore-menu">Explore Menu</a>
                </li>
                <li onClick={() => setMenu("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>
                    <a href="#food-display">Top Dishes</a>
                </li>
                <li onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>
                    <a href="#footer">Contact Us</a>
                </li>
            </ul>
            <div>
                <img src={assets.search_icon} alt="" />
                <div className="basket-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
