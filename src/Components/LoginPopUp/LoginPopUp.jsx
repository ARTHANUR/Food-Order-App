import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../Assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up");
    return (
        <div className="login-pop-up">
            <form className="login-pop-up-container">
                <div className="login-form-controller">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-pop-up-input">
                    {currentState == "Login" ? <></> : <input type="text " placeholder="name" required />}
                    <input type="email" placeholder="email" required />
                    <input type="password" placeholder="password" required />
                    <div className="login-checkbox">
                        <input type="checkbox" required />
                        <span>By continuing, I agree to the terms of use and privacy policy</span>
                    </div>
                    <button>{currentState == "Sign Up" ? "Create Account" : "Login"}</button>
                    <div className="login-pop-up-footer">
                        {currentState == "Login" ? (
                            <span>
                                Create a new account? <em onClick={() => setCurrentState("Sign Up")}>Click Here</em>
                            </span>
                        ) : (
                            <span>
                                Already have an account? <em onClick={() => setCurrentState("Login")}>Click Here</em>
                            </span>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPopUp;
