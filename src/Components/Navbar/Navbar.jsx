import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../Assets/assets";

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" />
            <ul>
                <li onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>
                    Home
                </li>
                <li onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>
                    Menu
                </li>
                <li onClick={() => setMenu("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>
                    Mobile App
                </li>
                <li onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>
                    Contact Us
                </li>
            </ul>
            <div>
                <img src={assets.search_icon} alt="" />
                <div className="basket-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
