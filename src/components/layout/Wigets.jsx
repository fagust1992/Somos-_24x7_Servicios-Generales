import React from "react";
import Animation from "../../helpers/Animation";
import imgHappyCustomers from "../../assets/iconos-clientes.png"; // Image path
import imgCleanedFloors from "../../assets/icono-piso.png"; // Image path
import imgSanitizedUpholstery from "../../assets/iconfinder-garbage-cleaning-properly-4454715_119745.png"; // Image path
import imgGrowth from "../../assets/4232841.png"; // Image path

export const Widgets = ({display=""}) => {
  return (
    <>
      <section className="row widgets" style={{display:display}}>
        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <img
              src={imgHappyCustomers}
              alt="Clientes Felices"
              className="iconos_wigets"
            />
            <span className="num" data-val="237" id="img1">
              000
            </span>
            <p>Clientes Felices</p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <img
              src={imgCleanedFloors}
              alt="Pisos Limpiados"
              className="iconos_wigets"
            />
            <span className="num" data-val="160">
              00
            </span>
            <p>Pisos limpiados</p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <img
              src={imgSanitizedUpholstery}
              alt="Tapicería Sanitizada"
              className="iconos_wigets"
            />
            <span className="num" data-val="100">
              00
            </span>
            <p>Tapicería sanitizadas</p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <img src={imgGrowth} alt="Crecimiento" className="iconos_wigets" />
            <span className="num" data-val="100">
              %
            </span>
            <p>Crecimiento</p>
          </div>
        </div>
      </section>
      <Animation />
    </>
  );
};
