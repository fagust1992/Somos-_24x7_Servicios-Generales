import React, { useState } from "react";
import emailjs from "emailjs-com";
import img_contacto from "../../assets/contacto.jpg";

import icono_whastpp from "../../assets/icono-whastpp.png";

const ContactForm = ({ fondo = "#12A7A9" }) => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.name || !formData.email || !formData.message) {
        console.error("Por favor, complete todos los campos obligatorios.");
        return;
      }

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        phone_number: formData.phoneNumber,
        address: formData.address,
        message: formData.message,
      };

      await emailjs.send(
        "service_v55adwn",
        "template_xjevxwq",
        templateParams,
        "8Fbu7rnt1Xt1U8usG"
      );

      console.log("Correo enviado correctamente");
      setMessageSent(true);

      // Limpiar el formulario después de enviar
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        message: "",
      });

      // Mostrar un mensaje al cliente
      alert(
        "Gracias por ponerte en contacto con nosotros. Nos pondremos en contacto contigo a través de la página pronto."
      );
    } catch (error) {
      console.error("Error al enviar el correo", error);
      // Puedes manejar errores aquí
    }
  };

  return (
    <>
   

      <div className="container contacto" style={{background:fondo}}>
        <div className="row">
          <div className="col-md-6">
            {/*img */}
            <img
              src={img_contacto}
              alt="Descripción de la imagen"
              className="img-fluid img-contact"
            />
            <div className="enlace_de_WhatsApp">
              <a href="https://wa.me/+56942579880">
                <img
                  src={icono_whastpp}
                  alt="Icono de WhatsApp"
                  className="icono-whastpp"
                />
                Escribemos
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Número de Teléfono:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Dirección:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensaje:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
