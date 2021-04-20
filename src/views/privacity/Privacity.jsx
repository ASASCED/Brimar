import React from "react";
import { useHistory } from "react-router";
import { Footer } from "../shared/Footer";

export const Privacity = () => {
  const history = useHistory();

  return (
    <div className="privacity animate__animated animate__fadeIn">
      <div className="privacity__top">
        <i onClick={() => history.push("/")} class="fas fa-arrow-left"></i>Aviso
        de Privacidad
      </div>
      <div className="privacity__section">
        <h4>Aviso de privacidad integral</h4>
        <p>
          La confidencialidad y debida protección de la información personal
          obtenida por BRIMAR SUMINISTROS MEDICOS, S.A. de C.V., está
          comprometida a proteger los datos personales que nos proporciona de
          manera responsable y con apego a lo previsto por la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares (en
          adelante la “Ley”), su Reglamento y demás normatividad aplicable. Para
          BRIMAR SUMINISTROS MEDICOS, S.A. de C.V. resulta necesaria la
          recopilación de ciertos datos personales para llevar a cabo las
          actividades intrínsecas a su giro comercial y mercantil. BRIMAR
          SUMINISTROS MEDICOS, S.A. de C.V. tiene la obligación legal y social
          de cumplir con las medidas, legales y de seguridad suficientes para
          proteger aquellos datos personales que haya recabado para las
          finalidades que en el presente aviso de privacidad serán descritas.
          Todo lo anterior se realiza con el objetivo de que usted tenga pleno
          control y decisión sobre sus datos personales. Por ello, le
          recomendamos que lea atentamente la siguiente información. Usted
          tendrá disponible en todo momento el presente Aviso de Privacidad en
          nuestro sitio web.
        </p>
      </div>
      <div className="privacity__section">
        <h4>Privacidad en nuestro sitio web</h4>
        <p>
          Identidad y Domicilio del Responsable. BRIMAR SUMINISTROS MEDICOS,
          S.A. de C.V., con domicilio en Calle del Zenzontle 18 Las Alamedas
          52970 Cd López Mateos, Méx. es el responsable de salvaguardar la
          integridad, privacidad y protección de los datos personales que nos
          proporcione. Los Datos personales y Datos Personales Sensibles
          sometidos a tratamiento por BRIMAR SUMINISTROS MEDICOS, S.A de C.V.
          para cumplir con las finalidades señaladas en el presente Aviso por
          mencionar podrán ser: datos personales de identificación, datos
          personales de contacto, datos patrimoniales y/o financieros, así como
          su historial de venta de artículos.
        </p>
      </div>
      <div className="privacity__section">
        <h4>Finalidades Primarias</h4>
        <p>
          BRIMAR SUMINISTROS MEDICOS, S.A. de C.V. tratará sus datos personales
          para las siguientes finalidades primarias y necesarias: Identificarlo;
          Atender y gestionar cualquier solicitud relacionada con los bienes y/o
          productos y/o servicios que ofrecemos; Facilitar la localización,
          tramitación, suministro y venta de productos y/o servicios; Atender
          las solicitudes de consulta remitidas; Aclaraciones Bancarias;
          Gestionar la entrega de mercancías a los destinatarios solicitados;
          Gestionar devoluciones; Contactarle para dar seguimiento al producto
          y/o servicio solicitado; Realizar consultas, investigaciones y
          revisiones con relación a quejas o reclamaciones.
        </p>
      </div>
      <Footer />
    </div>
  );
};
