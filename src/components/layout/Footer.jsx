import React from "react";

import img1 from "../../assets/icono_facebook.png";

import img3 from "../../assets/icono_instagram.png";
import img4 from "../../assets/icono-whastpp.png";



import { Banner_footer } from "./Banner_Footer";
const Footer = () => {
  return (
    <footer className="footer-container ">
  
      <section class="clientes">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="titulo">Nuestras Redes</h3>
            </div>
          </div>

          <div class="row">
            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img
                  src={img1}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
              </a>
            </div>

            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img
                  src={img3}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
              </a>
            </div>
            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img
                  src={img4}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <Banner_footer />
      </section>
    </footer>
  );
};

export default Footer;
