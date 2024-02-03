import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faUserGroup,
  faLightbulb,
  faMugHot,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

import Animation from "../../helpers/Animation";
export const Widgets = () => {


  return (
    <>
      <section className="row widgets" >
        <div className="col-12 col-md-2 col-lg-2 Columnas" >
          <div className="icon-container">
            <FontAwesomeIcon icon={faDiagramProject} className="iconos" />
            <span className="num" data-val="6" id="img1">
              000
            </span>
            <p>
              proyectos <br /> completados
            </p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <FontAwesomeIcon icon={faUserGroup} className="iconos" />
            <span className="num" data-val="100">
              00
            </span>
            <p>Amig@s coders</p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLightbulb} className="iconos" />
            <span className="num" data-val="100">
              00
            </span>
            <p>Pensamientos Increíbles</p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <FontAwesomeIcon icon={faMugHot} className="iconos" />
            <span className="num" data-val="10">
              000
            </span>
            <p>tazas de café</p>
          </div>
        </div>

        <div className="col-12 col-md-2 col-lg-2 Columnas">
          <div className="icon-container">
            <FontAwesomeIcon icon={faAward} className="iconos" />
            <span className="num" data-val="100">
              000
            </span>
            <p>Hackatones</p>
          </div>
        </div>
      </section>
      <Animation/>
    </>
  );
};
