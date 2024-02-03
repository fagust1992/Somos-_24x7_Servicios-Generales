import React from "react";

const MiComponenteConFondo = () => {
  const estiloDelContenedor = {
    background: "url('../src/assets/banner2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Ajusta según tus necesidades
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", // Color del texto
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold", // Hace la letra más gruesa
    marginTop: "5px", // Agrega un margen superior de 10px
  };
  


  return (
    <div style={estiloDelContenedor}>
      <div>
        <h2>¿Porque elegir 24x7 Empresa de ASEO?</h2>
        <p>
            <strong>
            Contamos con años de servicio en material de aseo y limpieza, lo cual
          se ve reflejado en nuestra carta de presentación con clientes
          satisfechos a los cuales hemos acompañado por años. Nuestro servicio
          se base en una plan de trabajo previamente desarrollado junto con
          nuestros clientes para lograr cubrir todas las necesidades y proponer
          otra soluciones en base a nuestra experiencia en terreno. El trabajo
          de nuestra empresa de aseo no sólo se basa en cuanto cuesta el m2 de
          limpieza en Chile, si no además en una propuesta personalizada y
          adaptada a sus propias necesidades y los requeridos por sus
          instalaciones. Con nuestros Servicios de Aseo y Limpieza no sólo
          disfrutará de la mantención día a día de su oficina, si no que además
          dejará de perder tiempo y dinero buscando en Yapo Empleos, Linkedin,
          El Rastro y otros portales, lo que sólo una empresa de calidad como la
          nuestra le puedes brindar
            </strong>
         
        </p>
      </div>
    </div>
  );
};

export default MiComponenteConFondo;
