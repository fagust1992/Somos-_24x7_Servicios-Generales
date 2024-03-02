import React from "react";
import img5 from "../../assets/img5.jpg";

export const Banner2_home = () => {
  return (
    <>
      <div className="container banner-container my-5">
        <div className="row">
          <div className="col-md-6 p-0">
            <img src={img5} alt="" className="img-fluid banner-image  imagen" />
          </div>
          <div className="col-md-6 p-0 banner-text">
            <p className="m-0 text-white">
              24x7 es tu aliado en la optimización de recursos y la eficiencia
              operativa. Nuestra empresa se compromete a ofrecer soluciones que
              no solo garanticen un uso inteligente de los recursos, sino
              también una respuesta rápida y oportuna a tus necesidades. Con
              nuestro enfoque las 24 horas del día, los 7 días de la semana, te
              brindamos la tranquilidad de saber que estamos aquí para ayudarte,
              ahorrando tiempo y recursos en cada paso del camino
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
