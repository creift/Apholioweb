import React from "react";
import {Routes,BrowserRouter,Route}from "react-router-dom";
import {Inicio} from "../components/Inicio.js";
import {Portafolio} from "../components/Portafolio.js";
import {Servicios} from "../components/Servicios.js";
import {Curriculum} from "../components/Curriculum.js";
import {Contacto} from "../components/Contacto.js";
import { HeaderNav } from "../components/Layout/HeaderNav.js";
import { Footer } from "../components/Layout/Footer.js";

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
    );
}