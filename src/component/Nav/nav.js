import React from "react";
import "./nav.css";

const NavBar = () => {
    return (
        <div className="Nav">
            <div className="Heading">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <div className="Dark-Light-Mode">
                <p>Dark Mode</p>
            </div>
        </div>
    );
}

export default NavBar;