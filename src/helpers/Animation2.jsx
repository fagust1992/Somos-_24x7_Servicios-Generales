import  { useEffect } from 'react';

const Animation2 = () => {
  useEffect(() => {
    const imagen11 = document.getElementById("caracteristicas");
    console.log(imagen11)

    if (imagen11) {
        const cargarImagen = (entradas, observador) => {
            entradas.forEach((entrada) => {
              if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
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
