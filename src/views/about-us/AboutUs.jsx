import mision from "../../assets/about-us/mision.jpeg";
import vision from "../../assets/about-us/vision.jpeg";
import valores from "../../assets/about-us/valores.jpeg";
import map from "../../assets/img/map.jpeg";

export const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="about-us__container">
        <img src={valores} alt="valores" />
        <div className="info">
          <h5>Nosotros</h5>
          <p>
            BRIMAR SUMINISTROS MEDICOS S.A DE C.V. es una empresa joven que nace
            a través de visionarios que se dedican a la fabricación en
            cubrebocas con la distribución y comercialización de productos de
            alta calidad, además nos preocupamos por proteger en la vida diaria
            de las personas y las necesidades del mismo. Actuamos con
            responsabilidad en todo lo que emprendemos garantizando así
            productos satisfactorios a nuestros clientes, cumpliendo con normas,
            certificaciones y estándares de nuestro personal y nuestros
            productos.
          </p>
        </div>
      </div>
      <div className="about-us__container">
        <img src={mision} alt="mision" />
        <div className="info">
          <h5>Mision</h5>
          <p>
            Crear valor para los clientes desarrollando y proporcionando
            productos en las mejores condiciones de calidad, servicio y precio,
            en base a una cultura de profesionalidad y capacidad emprendedora
            del equipo como motores del crecimiento, además de generar
            utilidades legítimas para sus socios.
          </p>
          <h5>Vision</h5>
          <p>
            Consolidarse como una empresa confiable de producción y
            comercialización de los mejores suministros médicos para la
            industria médica y popular.
          </p>
        </div>
      </div>
      <div className="about-us__container">
        <img src={vision} alt="vision" />
        <div className="info">
          <h5>Valores</h5>
          <ul>
            <li>Honestidad en todas nuestras acciones.</li>
            <li>
              Satisfacer los requisitos de nuestros clientes, así como los
              requisitos legales y reglamentarios.
            </li>
            <li>
              Garantizar la mejora continua de nuestros recursos humanos,
              tecnología y Sistema de Calidad.
            </li>
            <li>
              Generar activamente un ambiente de trabajo apropiado para que el
              personal se involucre en la consecución de los objetivos de la
              organización.
            </li>
            <li>
              Preservar los aspectos sanitarios para el cuidado de la salud de
              la sociedad.
            </li>
          </ul>

          <hr />
          <h5>Objetivos</h5>
          <ul>
            <li>
              Ayudar y contribuir a la salud regional y el bienestar de la
              población.
            </li>
            <li>
              Promover y difundir una cultura de salud integral con los
              productos manufacturados.
            </li>
          </ul>
        </div>
      </div>
      <div className="about-us__container">
        <div className="info">
          <h5>Contacto</h5>
          <p>Correo: contacto@brimarsuministros.com</p>
          <p>Cel: 5588483527</p>
          <p>Tel: 5571599498</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/@19.6025175,-99.2344892,3a,75y,103.42h,82.31t/data=!3m6!1e1!3m4!1sRMOg_n48c4B2UhC9S0xCNg!2e0!7i13312!8i6656"
          >
            Calle del Zenzontle Mz:19 Lote 19 Col. Lomas de San Miguel, Atizapán
            de Zaragoza, 52928
          </a>
        </div>

        <img src={map} alt="map" />

        <div className="social">
          <a
            href="https://www.instagram.com/brimarsuministros/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/Brimar-Suministros-Medicos-SA-de-CV-107889634770488"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/BrimarSuminist1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
