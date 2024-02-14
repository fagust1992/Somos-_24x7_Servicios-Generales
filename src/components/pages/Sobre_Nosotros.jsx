import React from "react";
import imgBanner from "../../assets/Img-banner2_sobreNosotros.jpg";
import img from "../../assets/img1-sobre-nosotros-banner1.jpg";
import img2 from "../../assets/banner_sobre_nosotros2.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import ContactForm from "../layout/ContactForm";
// Importa los estilos CSS

const Sobre_Nosotros = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/servicios");
  };

  return (
    <>
      <div
        className="custom-banner"
        style={{ backgroundImage: `url(${imgBanner})` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>¡Bienvenido a Nuestra Página Sobre Nosotros!</h2>
              <p>
                En nuestra empresa, nos comprometemos a brindar servicios de
                alta calidad y a satisfacer las necesidades de nuestros
                clientes. ¡Descubre más sobre nosotros y nuestro equipo!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-container" style={{ background: "#F5FAF4" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={img} alt="Banner" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">¡QUIENES SOMOS!</h2>
              <p className="custom-text">
                Una empresa comprometida en desarrollar servicios generales
                administrativos, de mantención y limpieza, e instalacion de
                obras menores, logrando la confianza de nuestros colaboradores.
                En Servicios Generales 24x7, brindamos soluciones a los
                proyectos que requiere el mercado, especializandonos en la
                ejecución de todo tipo de proyectos: comerciales, industriales,
                institucionales, particulares, entre otros; con presencia en
                todo el territorio nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="parrafo_banner_sobreNosotros container">
        <h2 className="title-banner text-center ">¡CONOCE SOBRE NOSOTROS!</h2>

        <div className="text-banner text-center">
          <div className="container-banner">
            <h1 className="title-banner">
              ¡Bienvenido a Nuestro Servicio de Limpieza!
            </h1>

            <div className="text-banner">
              <p className="texto-sobre-nosotros-1">
                En <span className="highlight-text">Nuestra Empresa</span> nos
                especializamos en ofrecer servicios de limpieza de alta calidad
                para empresas e instituciones educativas de todas las
                dimensiones.
              </p>
              <p className="texto-sobre-nosotros-1">
                Nos comprometemos a garantizar la excelencia en la limpieza y el
                mantenimiento de tu espacio, cumpliendo de manera proactiva y
                sostenible con los más altos estándares de higiene y calidad
                exigidos en cada entorno.
              </p>
              <p className="texto-sobre-nosotros-1">
                ¡Descubre cómo nuestros servicios pueden ayudarte a mantener un
                ambiente limpio, seguro y saludable para tu personal y
                estudiantes en un mercado cada vez más competitivo!
              </p>
            </div>
          </div>
        </div>
      </div>
    

      <div className="banner-container" style={{ background: "#F5FAF4" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="custom-text2 text-center">
                <h2 className="mb-4 h2_sobre_nosotros text-center">¡MISION!</h2>
                Brindar soluciones oportunas a nuestros clientes, garantizando
                la efectividad operacional en los procesos, el bienestar de sus
                colaboradores; así como, el éxito en las relaciones comerciales.
                <p className="custom-text2 text-center ">
                  <h2 className="h2_sobre_nosotros text-center">¡VISION!</h2>
                  Brindar soluciones oportunas a nuestros clientes, garantizando
                  la efectividad operacional en los procesos, el bienestar de
                  sus colaboradores; así como, el éxito en las relaciones
                  comerciales.
                </p>
              </p>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="Banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <a onClick={handleNavigate} className="parrafo_sobre_nosotros  text-white">
        VER NUESTROS SERVICIOS
        </a>
      </div>
      <h5 className="text-center mt-3">!Dudas! Rellene nuestro formulario</h5>
      <ContactForm fondo="#F0F0F0"/>
      <div className="banner-container ">
        <h2 className="banner-title">¡OBJETIVOS DE NUESTRA EMPRESA!</h2>
        <div>
          <p className="banner-text-3">
            Desde el año 2020 seguimos consolidando un proyecto que unifique la
            experiencia empresarial e industrial, a fin de proveer soluciones a
            centros educacionales e instituciones. Lo que inicio como un sueño,
            se ha convertido en una oportunidad que cuenta con la confianza, y
            el respaldo de distintos sectores; y hasta la fecha, nos permite
            seguir esforzandonos como un gran equipo de trabajo.
          </p>
        </div>

        <div>
          <h2 className="banner-subtitle">Incrementar Presencia del Mercado</h2>
          <p className="banner-text-3">
            Fortalecemos la presencia de nuestra marca en el mercado, con un
            plan de procesos y servicios estratégicos, que favorecen en ampliar
            nuevas relaciones comerciales.
          </p>
        </div>

        <div>
          <h2 className="banner-subtitle">Brindar Soluciones Efectivas</h2>
          <p className="banner-text-3">
            Garantizamos la excelencia de los objetivos trazados, cumpliendo de
            manera proactiva, sostenible y sustentable, los altos estándares de
            calidad requeridos en cada proyecto de nuestros clientes.
          </p>
        </div>

        <div>
          <h2 className="banner-subtitle">Consolidar Equipo de Trabajo</h2>
          <p className="banner-text-3">
            Impulsamos el liderazgo, bienestar y seguridad entre nuestros
            colaboradores, respaldando el esfuerzo de construir un excelente
            clima laboral.
          </p>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Sobre_Nosotros;
