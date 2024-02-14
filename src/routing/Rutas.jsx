import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Header } from "..//components/layout/Header";
import { Contacto } from "../components/pages/Contacto";
import Sobre_nosotros from "../components/pages/Sobre_Nosotros";
import { Servicios } from "../components/pages/Servicios";

export const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        {/*LAYOUT*/}
        <Header />

        {/*CONTENIDO CENTRAL Y RUTAS*/}
        <section id="content" className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sobre_nosotros" element={<Sobre_nosotros/>} />
            <Route path="/servicios" element={<Servicios/>} />


            <Route
              path="/*"
              element={
                <div className="jumbo">
                  <h1>Error 404</h1>
                </div>
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
};
