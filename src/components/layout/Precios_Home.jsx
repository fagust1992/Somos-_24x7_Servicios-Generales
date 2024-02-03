import React from "react";

export const Precios_Home = () => {
  return (
    <section class="precios ">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="titulo">Precios</h3>
          </div>
        </div>

        <div class="row">
          <div class="precio col-sm-4">
            <div class="plan verde">
              <p class="nombre">Básico</p>
              <p class="precio">$9</p>
              <ul class="caracteristicas">
                <li>1 Cuenta </li>
                <li>10 GB de espacio</li>
                <li>Dominio Personal</li>
              </ul>
              <a href="#" class="btn">
                Contratar Ahora
              </a>
            </div>
          </div>

          <div class="precio col-sm-4">
            <div class="plan active">
              <p class="nombre">Standard</p>
              <p class="precio">$19</p>
              <ul class="caracteristicas">
                <li>5 Cuenta </li>
                <li>50 GB de espacio</li>
                <li>Dominio Personal</li>
              </ul>
              <a href="#" class="btn">
                Contratar Ahora
              </a>
            </div>
          </div>

          <div class="precio col-sm-4">
            <div class="plan naranja">
              <p class="nombre">Premium</p>
              <p class="precio">$99</p>
              <ul class="caracteristicas">
                <li>Cuentas Ilimitadas</li>
                <li>500 GB de espacio</li>
                <li>Dominios Ilimitados</li>
              </ul>
              <a href="#" class="btn">
                Contratar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
