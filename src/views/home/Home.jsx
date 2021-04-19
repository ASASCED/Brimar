import { Parallax } from "react-parallax";

import mainImg from "../../assets/img/main.jpeg";

export const Home = () => {
  return (
    <div className="home" id="home">
      <Parallax bgImage={mainImg} strength={500}>
        <div style={{ height: 500 }}>
          <div className="home__info">
            <h2>BRIMAR SUMINISTROS MEDICOS SA de CV.</h2>
            <p>
              TRABAJAMOS EN LA MEJORA CONTINUA, PARA MANTENER LOS ESTÁNDARES Y
              CERTIFIACIONES DE CALIDAD DE NUESTROS CUBREBOCAS.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
