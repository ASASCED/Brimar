import React from "react";
import { useHistory } from "react-router";

export const Footer = () => {
  const history = useHistory();

  return (
    <footer>
      <span>&#169; 2021 Brimar Suministros Medicos S.A. de C.V.</span>
      <span onClick={() => history.push("/privacity")}>
        Aviso de Privacidad
      </span>
    </footer>
  );
};
