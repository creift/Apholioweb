import React from "react";
import { NavLink } from "react-router-dom";
import logoB from "../../assets/Images/LogoBufalo.png";

export const HeaderNav = () =>{

    return (
        <header className='header'>
            <div className='logo'>
                <img src={logoB} alt="Fredy Rodriguez Logo" className="logo-img" />
                <h3>
                    FREDY RODRIGUEZ 
                    <br>
                    </br>
                    JR.SOFTWARE DEV.
                </h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/Home">Home</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Services">Services</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/MyResumes">My Resumes</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Portfolio">Portfolio</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <hr/>
        </header>
    );
}