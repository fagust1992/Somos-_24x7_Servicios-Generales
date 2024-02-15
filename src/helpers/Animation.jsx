import React, { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    const imagen1 = document.getElementById("img1");

    if (imagen1) {
      const cargarImagen = (entradas, observador) => {
        entradas.map((entrada) => {
          if (entrada.isIntersecting) {
            console.log("estamos dentro");
            let valueDisplay = document.querySelectorAll(".num");
            let interval = 4000;
            valueDisplay.forEach((valueDisplay) => {
              let inicioValor = 0;
              let endValue = parseInt(valueDisplay.getAttribute("data-val"));
              let duracion = Math.floor(interval / endValue);

              valueDisplay.style.fontSize = "30px";
              let tiempo = setInterval(function () {
                inicioValor += 1;
                valueDisplay.textContent = inicioValor;
                if (inicioValor === endValue) {
                  clearInterval(tiempo);
                }
              }, duracion);
            });
          }
        });
      };

      const observador = new IntersectionObserver(cargarImagen, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0,
      });

      observador.observe(imagen1);

      return () => {
        observador.disconnect();
      };
    }
  }, []);

  return null; 
};

export default Animation;
