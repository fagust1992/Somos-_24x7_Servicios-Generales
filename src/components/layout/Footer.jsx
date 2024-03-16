import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/icono-correo.png";
import img3 from "../../assets/icono_instagram.png";
import img4 from "../../assets/icono-whastpp.png";
import { Banner_footer } from "./Banner_Footer";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="clientes">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="titulo">Nuestras Redes</h3>
            </div>
          </div>

          <div className="row">
            <div className="cliente col-xs-6 col-md-3 text-white">
              <img
                src={img1}
                alt="Facebook"
                style={{ width: "70px", height: "70px" }}
              />
              24x7sgenerales@gmail.com
            </div>

            <div className="cliente col-xs-6 col-md-3">
              <Link
                to="https://www.instagram.com/24x7serviciosgenerales?igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <img
                  src={img3}
                  alt="Instagram"
                  style={{ width: "70px", height: "70px" }}
                />
              </Link>
              <p>
                <Link
                  to="https://www.instagram.com/24x7serviciosgenerales?igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  Has clic aquí
                </Link>
              </p>
            </div>

            <div className="cliente col-xs-6 col-md-3">
              <Link
                to="https://wa.me/+56942579880"
                target="_blank"
              >
                <img
                  src={img4}
                  alt="Icono de WhatsApp"
                  className="icono-whatsapp"
                  style={{ width: "70px", height: "70px" }}
                />
              </Link>
              <p>
                <Link
                  to="https://wa.me/+56951925873"
                  target="_blank"
                >
                  Escríbenos por WhatsApp
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Banner_footer />
      </section>
    </footer>
  );
};

export default Footer;

