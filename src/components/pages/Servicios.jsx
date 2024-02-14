import React from "react";
import img from "../../assets/banner1_servicios.webp";
import { Precios_Home } from "../layout/Precios_Home";
import bannerImage from "../../assets/Img-banner2_home.jpg";
import bannerimg2 from "../../assets/limpieza-1.jpg"
import Footer from "../layout/Footer";
import ContactForm from "../layout/ContactForm";
export const Servicios = () => {
  return (
    <>
      <div className="service-banner text-center">
        <div className="overlay"></div>
        <h4 className="banner-description">
          Descubre nuestra amplia gama de servicios diseñados para satisfacer
          tus necesidades.
        </h4>
      </div>
      <div
        className="custom-banner-servicios"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center text-white">
              <h2 className="h2_texto1-servicios">
                ¡Bienvenido a Nuestra Página De Servicios!
              </h2>
              <h3 className="h2_texto2-servicios">
                !En Que Te Podemos Ayudar!
              </h3>
              <h5 className="text-white">
                <span className="Bienvenido">
                  ¡Bienvenido a 24x7 Servicios Integrales!{" "}
                </span>
                brindamos a nuestros clientes al proporcionar soluciones
                integrales y<span className="Bienvenido"> servicios </span>de
                alta calidad en todo momento. somos aporte y solución en sus
                proyectos, brindamos tiempo, precio y calidad con un equipo de
                trabajo multidisciplinario de especialistas con gran experiencia
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Precios_Home display="" />
      <div className="banner-container2 container">
        <h2 className="banner-title">¡OBJETIVOS DE NUESTRA EMPRESA!</h2>
        <div>
          <p className="banner-text-4 text-white">
            Desde el año 2020 seguimos consolidando un proyecto que unifique la
            experiencia empresarial e industrial, a fin de proveer soluciones a
            centros educacionales e instituciones. Lo que inicio como un sueño,
            se ha convertido en una oportunidad que cuenta con la confianza, y
            el respaldo de distintos sectores; y hasta la fecha, nos permite
            seguir esforzandonos como un gran equipo de trabajo.
          </p>
        </div>

        <div>
          <h2 className="banner-subtitle2">Consolidar Equipo de Trabajo</h2>
          <p className="banner-text-4 text-white">
            Impulsamos el liderazgo, bienestar y seguridad entre nuestros
            colaboradores, respaldando el esfuerzo de construir un excelente
            clima laboral.
          </p>
        </div>
      </div>
      <div className="banner-container" style={{ backgroundColor: "#fff" }}>
        <div className="container py-5" style={{ backgroundColor: "#F1F1F1" }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={bannerImage}
                alt="Banner"
                className="img-fluid"
                style={{ borderRadius: "90px" }}
              />
            </div>
            <div
              className="col-md-6"
              style={{ background: "#9CC6C6", borderRadius: "10px" }}
            >
              <h2 className="mb-4">Publico Objetivo</h2>
              <p>
                <span className="banner-text-bold">
                  {" "}
                  <strong>Ahorro De Tiempo y Recursos:</strong>
                </span>{" "}
                Ofrecemos soluciones eficientes para la atención de labores
                administrativas, servicios de obras, limpieza y mantenimiento de
                espacios educacionales, oficinas, casinos y áreas comunes.
              </p>
              <p>
                <span className="banner-text-bold">
                  <strong>Instituciones:</strong>
                </span>{" "}
                Garantizamos la confianza del sector público y privado en
                personal capacitado (oficina y administrativo), así como en
                mantenimiento (lavado, tratamiento, desinfección) y ejecución.
              </p>
            </div>
          </div>
        </div>
      </div>
      {""}
      <div className="banner-container" style={{ backgroundColor: "#fff" }}>
        <div className="container py-5" style={{ backgroundColor: "#F1F1F1" }}>
          <div className="row align-items-center">
            <div
              className="col-md-6"
              style={{ background: "#071742", borderRadius: "10px" }}
            >
              <h2 className="mb-4 text-white">Publico Objetivo</h2>
              <p className="text-white">
                <span className="banner-text-bold">
                  {" "}
                  <strong>Centros Educativos:</strong>
                </span>{" "}
                Ofrecemos soluciones eficientes para la atención de labores
                administrativas, servicios de obras, limpieza y mantenimiento de
                espacios educacionales, oficinas, casinos y áreas comunes.
              </p>
              <p className="text-white">
                <span className="banner-text-bold">
                  <strong>Instituciones:</strong>
                </span>{" "}
                Garantizamos la confianza del sector público y privado en
                personal capacitado (oficina y administrativo), así como en
                mantenimiento (lavado, tratamiento, desinfección) y ejecución.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={bannerimg2}
                alt="Banner"
                className="img-fluid"
                style={{ borderRadius: "90px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <h5 className="text-center">
        Alguna Duda Contactanos</h5>
      <ContactForm fondo="#F5E6A0"/>
      <div className="banner-container2 container-fluid" style={{background:"#212632"}}>
        <h2 className="banner-title">¡OBJETIVOS DE NUESTRA EMPRESA!</h2>
        <div>
          <p className="banner-text-4 text-white">
            Desde el año 2020 seguimos consolidando un proyecto que unifique la
            experiencia empresarial e industrial, a fin de proveer soluciones a
            centros educacionales e instituciones. Lo que inicio como un sueño,
            se ha convertido en una oportunidad que cuenta con la confianza, y
            el respaldo de distintos sectores; y hasta la fecha, nos permite
            seguir esforzandonos como un gran equipo de trabajo.
          </p>
        </div>

   
      </div>

    <Footer/>
    </>
  );
};
