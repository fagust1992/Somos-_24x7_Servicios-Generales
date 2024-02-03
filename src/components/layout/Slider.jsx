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
      <div className="title-header">
        Limpieza de Servicio Especializado en escuelas y universidades. Creamos
        espacios de aprendizaje sanitizados y confortables.
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
            <h5 className="text-white">First slide label</h5>
            <p className="text-white">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100 h-auto" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img} className="d-block w-100 h-auto" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="">Third slide label</h5>
            <p className="">
              Some representative placeholder content for the third slide.
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
