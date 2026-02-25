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
                        <NavLink to="/inicio">Inicio</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Servicios">Servicios</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Curriculum">Curriculum</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Portafolio">Portafolio</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
            <hr/>
        </header>
    );
}