import React from "react";
import img1 from "../../assets/img-Banner.jpg";
import img2 from "../../assets/img-Banner2.webp";

const Banner = () => {
  const imageStyle = {
    width: "900px", // Ajusta este valor según tu preferencia
    maxWidth: "100%",
    height: "auto",
    filter: "grayscale(60%)",
  
  };

  return (
    <div className="container-fluid" style={{ background: "#D1D4D9" }}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={img1}
            alt="Imagen del banner"
            className="img-fluid rounded border"
            style={imageStyle}
          />
        </div>
        <div className="col-md-6">
          <div className="p-4" style={{ background: "#B3FAE9" }}>
            <h2 className="text-primary">Ambientes Educativos Protegidos</h2>
            <p className="text-muted mb-4">
              <strong>Limpieza y Sanitización Eficiente</strong>: Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Garantizamos un
              entorno seguro en escuelas y universidades mediante rigurosos
              protocolos de limpieza y desinfección. Ofrecemos soluciones
              integrales que abarcan desde la limpieza de aulas hasta la
              desinfección de áreas comunes, todo con el compromiso de crear un
              ambiente educativo seguro y saludable. Nuestra misión es
              proporcionar servicios de limpieza eficientes, promoviendo la
              salud y el bienestar en el entorno educativo.
            </p>
            <p className="text-muted">
              <strong>Limpieza y Sanitización 2</strong>: Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Garantizamos un entorno seguro
              en escuelas y universidades mediante rigurosos protocolos de
              limpieza y desinfección. Ofrecemos soluciones integrales que
              abarcan desde la limpieza de aulas hasta la desinfección de áreas
              comunes, todo con el compromiso de crear un ambiente educativo
              seguro y saludable. Nuestra misión es proporcionar servicios de
              limpieza eficientes, promoviendo la salud y el bienestar en el
              entorno educativo.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="p-4 " style={{ background: "#F2FAB3" }}>
            <h2 className="text-primary">Ambientes Educativos Protegidos</h2>
            <p className="text-muted mb-4">
              <strong>Limpieza y Sanitización Eficiente</strong>: Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Garantizamos un
              entorno seguro en escuelas y universidades mediante rigurosos
              protocolos de limpieza y desinfección. Ofrecemos soluciones
              integrales que abarcan desde la limpieza de aulas hasta la
              desinfección de áreas comunes, todo con el compromiso de crear un
              ambiente educativo seguro y saludable. Nuestra misión es
              proporcionar servicios de limpieza eficientes, promoviendo la
              salud y el bienestar en el entorno educativo.
            </p>
            <p className="text-muted">
              <strong>Limpieza y Sanitización 2</strong>: Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Garantizamos un entorno seguro
              en escuelas y universidades mediante rigurosos protocolos de
              limpieza y desinfección. Ofrecemos soluciones integrales que
              abarcan desde la limpieza de aulas hasta la desinfección de áreas
              comunes, todo con el compromiso de crear un ambiente educativo
              seguro y saludable. Nuestra misión es proporcionar servicios de
              limpieza eficientes, promoviendo la salud y el bienestar en el
              entorno educativo.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={img2}
            alt="Imagen del banner"
            className="img-fluid rounded border"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
