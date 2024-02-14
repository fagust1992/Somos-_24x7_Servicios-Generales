import React from "react";
import Img_contact_us from "../../assets/contacta-con-nosotros.jpg";

export const Banner_Contacto = () => {
  return (
    <>
      <div className="position-relative h-50">
        <div className="container-fluid p-0">
          <img
            src={Img_contact_us}
            alt="Descripción de la imagen"
            className="img-fluid w-100"
          />
        </div>
      </div>
    </>
  );
};
