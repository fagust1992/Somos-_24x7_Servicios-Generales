import React from "react";
import imgProject from "../../assets/icono_honestidad.png";
import imgUserGroup from "../../assets/icono_confianza.png";
import imgLightbulb from "../../assets/icono_trabajo_en_Euipo.png";
import imgMugHot from "../../assets/icono-crecimiento.png";

export const Banner_footer = () => {
  const imageSize = "200px";

  return (
    <section className="container-fluid">
      <div className="row justify-content-center">
        <h5 className="text-center text-white h5_banner_footer">
          Nuestros valores
        </h5>

        <div className="col-11 col-md-2 col-lg-2 columnas_footer">
          <div className="icon-container">
            <img
              src={imgProject}
              className="iconos_footer"
              alt="Project"
              style={{ width: imageSize, height: imageSize }}
            />
            <h5>Honestidad</h5>
            <p>
              La integridad y transparencia en nuestras acciones nos hacen
              merecedores de la confianza.
            </p>
          </div>
        </div>

        <div className="col-11 col-md-2 col-lg-2 columnas_footer">
          <div className="icon-container">
            <img
              src={imgUserGroup}
              className="iconos_footer"
              alt="User Group"
              style={{ width: imageSize, height: imageSize }}
            />
            <h5>Confianza</h5>
            <p>
              Generamos vinculos de máximo desempeño y preparación, para
              lavanzar a nuevos desafios y metas.
            </p>
          </div>
        </div>

        <div className="col-11 col-md-2 col-lg-2 columnas_footer">
          <div className="icon-container">
            <img
              src={imgLightbulb}
              className="iconos_footer"
              alt="Lightbulb"
              style={{ width: imageSize, height: imageSize }}
            />
            <h5>Trabajo en Equipo</h5>
            <p>
              Fortalecemos el bienestar y seguridad entre nuestros
              colaboradores, respaldando un excelente clima laboral.
            </p>
          </div>
        </div>

        <div className="col-11 col-md-2 col-lg-2 columnas_footer x">
          <div className="icon-container">
            <img
              src={imgMugHot}
              className="columnas_footer "
              alt="Mug Hot"
              style={{ width: imageSize, height: imageSize }}
            />
            <h5>Crecimiento</h5>
            <p>
              Nos adapatamos a los constantes cambios, optimizando con liderazgo
              y los procesos que orienten al bienestar y desarrollo.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ margin: "0 20px" }}> {/* Agregar margen horizontal aquí */}
        <span className="texto_inferior_footer text-white">
          Trabajamos con amor ❤️🩷🧡💛💚💙
        </span>
        <h6 className="text-white mt-2"> Contacto</h6>
        <p className="text-white">+56951925873</p>
        <p className="text-white">24x7sgenerales@gmail.com</p>
        <span
          className="texto_autor text-white"
          style={{ fontSize: "15px", marginTop: "10px" }}
        >
          Bajo todos los derechos reservados - Hecho por Francisco August
        </span>
      </div>
    </section>
  );
};
