import React from "react";
import {Routes,BrowserRouter,Route}from "react-router-dom";
import {Home} from "../components/Home.js";
import {Portfolio} from "../components/Portfolio.js";
import {Services} from "../components/Services.js";
import {MyResumes} from "../components/MyResumes.js";
import {Contact} from "../components/Contact.js";
import { HeaderNav } from "../components/Layout/HeaderNav.js";
import { Footer } from "../components/Layout/Footer.js";

export const MisRutas= () => {
    return(
        <BrowserRouter>
        {/*Header and navigation*/}

        <HeaderNav/>
        {/*Main contain*/ }
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/MyResumes" element={<MyResumes/>}/>
        <Route path="/contact" element={< Contact/>}/>
        </Routes>
        {/*Footer */}
        <Footer/>
        </BrowserRouter>
    );
}