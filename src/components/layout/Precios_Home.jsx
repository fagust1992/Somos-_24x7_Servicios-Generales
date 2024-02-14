import React from "react";
import { useNavigate } from "react-router-dom";
import icono1 from "../../assets/icon1-carta.png"
import icono2 from "../../assets/icon2-carta.png"
import icono3 from "../../assets/icon3-carta.png"
import icono4  from "../../assets/913387.png"

export const Precios_Home = ({ display = "none" }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contacto");
  };
  return (
    <section className="precios ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="titulo">Servicios de Limpieza y Aseo</h3>
          </div>
        </div>

        <div className="row">
          <div className="precio col-sm-3">
            <div className="plan blanco verde">
              <p className="nombre">Limpieza y Aseo</p>
             <img src={icono1} alt="" style={{width:"50px", height:"50px"}} />
              <ul className="caracteristicas">
                <li>Servicio de Limpieza,</li>
                <li>desinfeción y sanitazación</li>
                <li>de salas, oficinas y áreas</li>
                <li>comunes - zonas</li>
                <li>escolares, casinos,</li>
                <li>empresas e indutrias.</li>
              </ul>
              <a
                onClick={handleNavigate}
                className="parrafo_sobre_nosotros btn text-white"
              >
                Cotiza aqui
              </a>
            </div>
          </div>

          <div className="precio col-sm-3">
            <div className="plan verde">
              <p className="nombre">Estructuras</p>
              <img src={icono2} alt="" style={{width:"50px", height:"50px"}} />
              <ul className="caracteristicas">
                <li>Tratamiento de polvos y</li>
                <li>liquidos en pardes, techos</li>
                <li>y ventanas en alturas.</li>
                <li>Preservamos los espacios</li>
                <li>y estructiras fisicas</li>
                <li>zonas verdes.</li>
              </ul>
              <a
                onClick={handleNavigate}
                className="parrafo_sobre_nosotros btn text-white"
              >
                Cotiza aqui
              </a>
            </div>
          </div>

          <div className="precio col-sm-3">
            <div className="plan  blanco verde">
              <p className="nombre">Lavado y Tratamiento</p>
              <img src={icono3} alt=""style={{width:"50px", height:"50px"}} />
              <ul className="caracteristicas">
                <li>Servicio de lavado de</li>
                <li>tapicerias y zonas de</li>
                <li>tráfico, Abrillantamiento</li>
                <li>de pisos y tratamientos</li>
                <li>de escalas.</li>
              </ul>
              <a
                onClick={handleNavigate}
                className="parrafo_sobre_nosotros btn text-white"
              >
                Cotiza aqui
              </a>
            </div>
          </div>
          <div className="precio col-sm-3" style={{ display: display }}>
            <div className="plan verde">
              <p className="nombre">Mantención</p>
              <img src={icono4} alt=""style={{width:"50px", height:"50px"}} />
              <ul className="caracteristicas">
                <li>Gasfiteria, Revestimiento</li>
                <li>y pintura (paredes/ pisos)..</li>
                <li>Remodelaciones e</li>
                <li>instalacciones, Obras</li>
                <li>Menores - estructurales.</li>
              </ul>
              <a
                onClick={handleNavigate}
                className="parrafo_sobre_nosotros btn text-white"
              >
                Cotiza aqui
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
