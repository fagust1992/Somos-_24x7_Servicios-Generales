import React, { useEffect } from 'react';

const Animation2 = () => {
  useEffect(() => {
    const imagen11 = document.querySelector(".imagen");
    console.log(imagen11)

    if (imagen11) {
        const cargarImagen = (entradas, observador) => {
            entradas.forEach((entrada) => {
              if (entrada.isIntersecting) {
        imagen11.classList.add("visible");
              } 
            });
          };

      const observador = new IntersectionObserver(cargarImagen, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0,
      });

      observador.observe(imagen11);

      return () => {
        observador.disconnect();
      };
    }
  }, []); // El array vacío indica que este efecto se ejecuta solo una vez, después del montaje del componente

  return null;
};

export default Animation2;
