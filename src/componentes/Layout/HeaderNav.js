import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () =>{

    return (
        <header>
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
    )
}