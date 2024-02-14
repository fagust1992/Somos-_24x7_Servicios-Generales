import React from "react";
import ContactForm from "../layout/ContactForm";
import { Banner_Contacto } from "../layout/Banner_Contacto";
import Footer from "../layout/Footer";
import { ContactBanner } from "../layout/ContactBanner";

export const Contacto = () => {
  return (
    <>
      <Banner_Contacto />
      <h5 className="text-center parrafo_Contact_us">
        Comuníquese con nosotros para consultas, sugerencias o cotizaciones, un
        ejecutivo se contactará con usted a la brevedad. Complete todos los
        campos obligatorios (*)
      </h5>

      <ContactForm fondo="#89C877"/>
      <ContactBanner/>
      <Footer />
    </>
  );
};
