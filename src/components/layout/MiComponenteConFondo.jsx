import React from "react";
import img_fondo from "../../assets/banner2.jpg";

const MiComponenteConFondo = () => {
  const estiloSuperposicion = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro con opacidad
  };

  const estiloTexto = {
    zIndex: 2, // Asegura que el texto esté sobre la superposición
    color: "#fff", // Color blanco
    fontSize: "16px",
    fontWeight: "bolder",
    textAlign: "justify",
    marginInline: "30px",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          marginTop: "10px",
          backgroundImage: `url(${img_fondo})`,
      
        }}
      >
        <div style={estiloSuperposicion}></div>
        <div style={estiloTexto}>
          <h2 style={{ marginBottom: "10px" }}>¿Por qué elegir 24x7 Empresa de ASEO?</h2>
          <p className="text-white" style={{fontSize:"12px"}}>
            Contamos con años de servicio en material de aseo y limpieza, lo
            cual se ve reflejado en nuestra carta de presentación con clientes
            satisfechos a los cuales hemos acompañado por años. Nuestro servicio
            se basa en un plan de trabajo previamente desarrollado junto con
            nuestros clientes para lograr cubrir todas las necesidades y
            proponer otras soluciones en base a nuestra experiencia en terreno.
            El trabajo de nuestra empresa de aseo no solo se basa en cuanto
            cuesta el m2 de limpieza en Chile, sino además en una propuesta
            personalizada y adaptada a sus propias necesidades y los
            requerimientos de sus instalaciones. Con nuestros Servicios de Aseo
            y Limpieza no solo disfrutará de la mantención día a día de su
            oficina, sino que además dejará de perder tiempo y dinero buscando
            en Yapo Empleos, Linkedin, El Rastro y otros portales, lo que solo
            una empresa de calidad como la nuestra le puede brindar.
          </p>
        </div>
      </div>
    </>
  );
};

export default MiComponenteConFondo;
