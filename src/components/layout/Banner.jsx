import React from "react";
import img1 from "../../assets/img-Banner.jpg";
import img2 from "../../assets/img-Banner2.webp";
import Animation2 from "../../helpers/Animation2";


const Banner = () => {
  const imageStyle = {
    width: "900px", // Ajusta este valor según tu preferencia
    maxWidth: "100%",
    height: "400px",
    filter: "grayscale(60%)",
  };

  const paragraphStyle = {
    textAlign: "justify",
  };

  return (
    <div className="container-fluid" style={{ background: "#D1D4D9" }}>
      
      <div className="row align-items-center">
      
        <div className="col-md-6">
          <img
            src={img1}
            alt="Imagen del banner"
            className="img-fluid rounded border imagen"
            style={imageStyle}
          />
        </div>
        <div className="col-md-6">
          <div className="p-4" style={{ background: "#B3FAE9" }}>
            <h2 className="text-primary">Ambientes Educativos Protegidos</h2>
            <p className="text-muted mb-4" style={paragraphStyle}>
              Es nuestro compromiso con la creación de ambientes educativos
              seguros y saludables, ofrecemos servicios de limpieza integral que
              abarcan cada rincón de las instituciones educativas. Desde aulas
              hasta oficinas, áreas comunes y casinos, implementamos rigurosos
              protocolos de limpieza y desinfección para garantizar un entorno
              libre de gérmenes y patógenos.
            </p>
            <h6>Limpieza de Aulas y Oficinas</h6>
            <p className="text-muted" style={paragraphStyle}>
              Nos especializamos en la limpieza detallada de aulas y oficinas.
              Nuestro personal capacitado utiliza productos y técnicas de
              limpieza avanzados para asegurar la eliminación de cualquier
              contaminante, promoviendo así un espacio propicio para el
              aprendizaje y el trabajo.
            </p>
            <h6>Desinfección de Áreas Comunes</h6>
            <p className="text-muted" style={paragraphStyle}>
              Implementamos medidas específicas para la desinfección de áreas
              comunes, como pasillos y zonas de descanso. Esto contribuye a la
              prevención de enfermedades y garantiza la seguridad de
              estudiantes, profesores y personal administrativo.
            </p>
            <h6>Limpieza Especializada en Casinos y Espacios Recreativos</h6>
            <p className="text-muted" style={paragraphStyle}>
              Reconociendo la importancia de mantener los espacios recreativos
              limpios, ofrecemos servicios especializados de limpieza para
              casinos y otras áreas de esparcimiento. Esto no solo mejora la
              higiene, sino que también contribuye al bienestar general de la
              comunidad educativa.
            </p>
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="p-2 " style={{ background: "#F2FAB3" }}>
            <h2 className="text-primary">Instituciones</h2>
            <p className="text-muted mb-4" style={paragraphStyle}>
              <strong>Compromiso con la Confianza Pública y Privada</strong>: En
              el ámbito de las instituciones, nos destacamos por garantizar la
              confianza tanto en el sector público como privado. Contamos con un
              equipo de personal altamente capacitado en roles de oficina y
              administrativos, asegurando un servicio profesional y eficiente
              para satisfacer las necesidades específicas de cada institución.
            </p>
            <p className="text-muted" style={paragraphStyle}>
              <strong>Servicios de Mantenimiento Integral</strong>: Nuestro
              compromiso con la excelencia se refleja en la prestación de
              servicios de mantenimiento que abarcan lavado, tratamiento y
              desinfección. Desde la limpieza meticulosa hasta el tratamiento
              especializado, nos ocupamos de mantener las instalaciones en
              óptimas condiciones, priorizando la salud y el bienestar de
              quienes las utilizan.
            </p>
            <p className="text-muted" style={paragraphStyle}>
              <strong>Ejecución de Obras Menores</strong>: Más allá del
              mantenimiento diario, ofrecemos servicios especializados en la
              ejecución de obras menores. Ya sea la renovación de espacios
              específicos o la implementación de mejoras, nuestro equipo se
              encarga de llevar a cabo proyectos que contribuyan al desarrollo y
              la funcionalidad de las instalaciones institucionales.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={img2}
            alt="Imagen del banner"
            className="img-fluid rounded border  "
            style={imageStyle}
          />
        </div>
      </div>
      <Animation2/>
    </div>
  );

};

export default Banner;
