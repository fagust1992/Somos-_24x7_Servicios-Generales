import React from "react";
import bannerImage from "../../assets/Img-banner2_home.jpg";
export const ContactBanner = () => {
  return (
    <div className="banner-container" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={bannerImage} alt="Banner" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="mb-4">¡Bienvenido a nuestra pagina de contacto estas a un paso!</h1>
            <p>
              ¿Por qué
              contactarnos? Experiencia y profesionalismo en limpieza.
              Soluciones adaptadas a tus necesidades. Garantía de calidad y
              confianza. Atención personalizada y amable. Asesoramiento experto
              desde el primer contacto. Rellena nuestro formulario y te
              contactaremos con tus datos, escríbenos o llámanos a nuestro
              número de WhatsApp. ¡Estamos aquí para brindarte la mejor asesoría
              en limpieza!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
