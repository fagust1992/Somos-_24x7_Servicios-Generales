import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import img from "../../assets/logo24x7.png";

export const Nav = () => {
  const navigate = useNavigate(); // Obtiene la función navigate del hook

  // Función para navegar a la ruta especificada
  const handleNavigation = (path) => {
    navigate(path);
  };

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
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={() => handleNavigation("/home")} // Navega a la ruta "/"
            >
              Home
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavigation("/sobre_nosotros")} // Navega a la ruta "/about"
            >
              Sobre Nosotros
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavigation("/servicios")} // Navega a la ruta "/services"
            >
              Servicios
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavigation("/contacto")} // Navega a la ruta "/contact"
            >
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
              style={{ width: "70px", height: "70px" }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
