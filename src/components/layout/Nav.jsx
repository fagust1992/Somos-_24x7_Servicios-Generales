import React from "react";
import img from "../../assets/logo24x7.png";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Sobre Nosotros
            </a>
            <a className="nav-link" href="#">
              Servicios
            </a>
            <a className="nav-link" href="#">
              Contacto
            </a>
          </div>
        </div>
        {/* Agrega el icono al lado derecho */}
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">
            <img
              src={img}
              alt="Icono"
              style={{ width: "150px", height: "90px" }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
