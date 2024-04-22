import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                <li><NavLink to="/" className={nav => nav.isActive ? "nav-active" : ""}>
                        Accueil
                    </NavLink></li>

                    <li><NavLink to="/favorites" className={nav => nav.isActive ? "nav-active" : ""}>
                        Coups de cœur
                    </NavLink></li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;