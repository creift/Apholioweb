import React from "react";
import {Routes,Rooute,BrowserRouter,NavLink, Route}from "react-router-dom";
import {Inicio} from "../componentes/Inicio.js";
import {Portafolio} from "../componentes/Portafolio.js";
import {Servicios} from "../componentes/Servicios.js";
import {Curriculum} from "../componentes/Curriculum.js";
import {Contacto} from "../componentes/Contacto.js";
import { HeaderNav } from "../componentes/Layout/HeaderNav.js";
import { Footer } from "../componentes/Layout/Footer.js";


export const MisRutas= () => {
    return(
        <BrowserRouter>
        {/*Header and navigation*/}

        <HeaderNav/>
        {/*Main contain*/ }
        <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/Portafolio" element={<Portafolio/>}/>
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path="/contacto" element={< Contacto/>}/>
        </Routes>
        {/*Footer */}
        <Footer/>
        </BrowserRouter>
    )
}