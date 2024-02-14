import React from "react";
import { Slider } from "../layout/Slider";
import Banner from "../layout/Banner";
import Caracteristicas from "../layout/Caracteristicas";
import MiComponenteConFondo from "../layout/MiComponenteConFondo";
import ContactForm from "../layout/ContactForm";
import { Precios_Home } from "../layout/Precios_Home";
import { Widgets } from "../layout/Wigets";

import { Banner2_home } from "../layout/Banner2_home";
import Footer from "../layout/Footer";

export const Home = () => {
  return (
    <>
      <Slider />
      <Caracteristicas />
      <Banner />
      <Precios_Home />
      <MiComponenteConFondo />
      <ContactForm />
      <Banner2_home />
      <Widgets />
      <Footer />
    </>
  );
};
