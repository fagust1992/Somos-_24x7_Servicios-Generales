import React from "react";
import { Slider } from "../layout/Slider";
import Banner from "../layout/Banner";
import Caracteristicas from "../layout/Caracteristicas";
import MiComponenteConFondo from "../layout/MiComponenteConFondo";
import { Contacto } from "./Contacto";
import { Precios_Home } from "../layout/Precios_Home";
import img1 from "../../assets/cliente1.png";
import img2 from "../../assets/cliente2.png";
import img3 from "../../assets/cliente3.png";
import img4 from "../../assets/cliente3.png";
import img5 from "../../assets/img5.jpg";
import { Widgets } from "../layout/Wigets";
export const Home = () => {
  return (
    <>
      <Slider />
      <Caracteristicas />
      <Banner />
      <Precios_Home />
      <MiComponenteConFondo />
      <Contacto />
	
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 p-0">
            {/* Imagen de 600x500 */}
            <img
              src={img5}
              alt=""
              className="img-fluid"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            className="col-md-6 p-0"
            style={{
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Párrafo de prueba */}
            <p className="m-0">
              {" "}
              {/* Agregamos m-0 para eliminar el margen del párrafo */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
<Widgets/>
      <section class="clientes">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="titulo">Nuestros Clientes</h3>
            </div>
          </div>

          <div class="row">
            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img src={img1} alt="" />
              </a>
            </div>
            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img src={img2} alt="" />
              </a>
            </div>
            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img src={img3} alt="" />
              </a>
            </div>
            <div class="cliente col-xs-6 col-md-3">
              <a href="#">
                <img src={img4} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
