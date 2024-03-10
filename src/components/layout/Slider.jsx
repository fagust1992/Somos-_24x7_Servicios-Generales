import img from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";
import img3 from "../../assets/img3.jpg";

export const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="title-header" style={{fontSize:"19px"}}>
        24x7 Servicios Generales Expertos 33 en Limpieza de Servicio Especializado
        en Centro Educativos y Instituciones. Creamos espacios de aprendizaje
        sanitizados y confortables.
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img4} className="d-block w-100 h-auto" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="" style={{ color: "black" }}>
              LIMPIEZA Y ASEO
            </h5>
            <p className="text-white">
              <strong>
                24x7 Servicios Generales es líder en ofrecer soluciones
                integrales de apoyo en personal administrativo, limpieza y
                mantenimiento para escuelas e instituciones. Con un enfoque
                centrado en la excelencia
              </strong>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100 h-auto" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5  style={{color:"blue"}}> <strong>Estructuras</strong></h5>
            <p>
              <strong>
                Ofrecemos tratamientos especializados para polvo y líquidos en
                áreas altas, incluyendo paredes, techos y ventanas. Nuestro
                enfoque incluye la preservación de espacios y estructuras
                físicas, como las zonas verdes circundantes, asegurando entornos
                seguros y bien mantenidos.
              </strong>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img} className="d-block w-100 h-auto" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="" style={{color:"blue"}}>
              {" "}
              <strong>LAVADO Y TRATAMIENTO</strong>
            </h5>
            <p className="">
              <strong>
                Nuestros servicios incluyen lavado y tratamiento especializado
                para tapicerías y áreas de alto tráfico, así como el
                abrillantamiento de pisos y tratamientos para escaleras. Nos
                dedicamos a mantener sus espacios limpios, brillantes y en
                óptimas condiciones
              </strong>
            </p>
          </div>
        </div>

        {/* ... (otros elementos del carousel) */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
