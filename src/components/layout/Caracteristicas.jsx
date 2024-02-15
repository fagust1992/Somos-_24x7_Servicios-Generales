import React from "react";
import icono1 from "../../assets/icono-araña.png";
import icono2 from "../../assets/Icono-alergia.png";
import icono3 from "../../assets/icono-de-ratón.png";

const Caracteristicas = () => {
  return (
    <div>
      <div
        className="text-banner"
        style={{ background: "#0A145A", marginBottom: "0", color: "#fff" }}
      >
        <h6
          className="banner-title"
          style={{
            color: "#fff",
            textAlign: "center",
            padding: "10px",
            marginBottom: "30px",
            marginTop: "40px",
            fontSize: "15px",
          }}
        >
          24x7 Servicios Generales Expertos en Servicios de Limpieza y
          Sanitizacion
        </h6>

        <p
          className="banner-paragraph"
          style={{
            color: "#fff",
            marginInline: "70px",
            fontSize: "18px",
            textAlign: "justify",
          }}
        >
          En 24x7 Servicios Generales ofrecemos el mas eficiente servicio
          integral de apoyo en personal administrativo, de limpieza y
          mantención, en escuelas e instituciones. Nuestra experiencia,
          dedicación y capacidad de adaptación, nos permite crear planes de
          acción acorde a los requerimientos y necesidades de cada caso. Nos
          esforzamos por consolidarnos como referentes en la gestión de
          servicios: limpieza, desinfección y sanitización en: salas, oficinas,
          casinos, laboratorios, baños, áreas comunes de superficie y/o altura;
          mediante la capacitación de la red de colaboradores y adaptación de
          nuevas tecnologías, que nos permitan obtener un altísimo nivel de
          fidelización de nuestros clientes.
        </p>

        <section
          className="caracteristicas"
          style={{ background: "#0A145A", marginTop: "30px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3
                  className="titulo_caracteristicas text-center "
                  style={{ fontSize: "22px" }}
                >
                  Peligros más comunes por la falta de limpieza
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 caracteristica">
                <img src={icono3} alt="" className="icono img-pequena" />
                <h4 className="primera_linea"       style={{ fontSize: "22px" }}>Ratones</h4 >
                <p className="parrafo con-margin-top text-white">
                  Es simple con un buen aseo la posibilidad de que aparezcan se
                  reducen bastante de tener estás feas visitas.
                </p>
              </div>

              <div className="col-sm-4 caracteristica">
                <img src={icono1} alt="" className="icono img-pequena" />
                <h4 className="primera_linea" style={{ fontSize: "22px" }}>Ácaros y arañas</h4>
                <p className="parrafo text-white">
                  Que tienen distintas medidas de impacto en la salud, pero que
                  se pueden evitar sin mayor dificultad con una buena limpieza
                  del hogar
                </p>
              </div>

              <div className="col-sm-4 caracteristica">
                <img src={icono2} alt="" className="icono img-pequena" />
                <h4 className="primera_linea">Alergias</h4>
                <p className="parrafo text-white">
                  Las alergias se presentan con distintos con grados de
                  gravedad, siendo que los casos más complejos llega al asma
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Caracteristicas;
