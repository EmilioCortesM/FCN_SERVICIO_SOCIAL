import React from "react";
import { useEffect } from "react";
import "./Header.css";
import { animate, inView } from "motion";

function Header() {
  useEffect(() => {
    animate(".welcome_text", { transform: "rotate(360deg)" }, { duration: 1 });
  });
  return (
    <div className="container">
      <br />
      <div className="welcome_text">
        <h2> ¡Bienvenidos! </h2>
      </div>
      <div className="m-auto description_text">
        <p>
          Somos el equipo de Comunicación de la Ciencia UAQ. Nuestro objetivo es
          impulsar la formación de mentes críticas y positivas en la resolución
          de problemas científicos, ambientales y sociales de nuestro país. Nos
          especializamos en el desarrollo de Tecnologías Inmersivas para
          divulgar conocimiento científico.
        </p>
      </div>
    </div>
  );
}

export default Header;
