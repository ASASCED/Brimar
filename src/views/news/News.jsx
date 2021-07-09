import React, { useState } from "react";
import video from "../../assets/video.mp4";

export const News = () => {
  const [identifier, setIdentifier] = useState(0);
  const news = [
    {
      imgUrl:
        "https://www.eluniversal.com.mx/sites/default/files/2020/12/09/mascarilla.jpg",
      title: "¿Se pueden lavar los cubrebocas KN95?",
      desc: "De acuerdo con información publicada por la Universidad Autónoma de México (UNAM), las mascarillas N95 Y KN95 no pueden lavarse, pero sí pueden desinfectarse utilizando luz ultravioleta a 254 nanómetros (UV-C, germicida).",
      href: "https://www.eluniversal.com.mx/ciencia-y-salud/ciencia/se-pueden-lavar-los-cubrebocas-kn95",
    },
    {
      imgUrl:
        "https://www.eluniversal.com.mx/sites/default/files/2020/12/14/kn95.png",
      title: "¿Cada cuándo se debe cambiar el cubrebocas KN95?",
      desc: "Debido a la pandemia de Covid-19, expertos a nivel mundial han recomendado el uso de mascarillas y cubrebocas para evitar la propagación del SARS-CoV-2. ",
      href: "https://www.eluniversal.com.mx/ciencia-y-salud/salud/cada-cuando-se-debe-cambiar-el-cubrebocas-kn95",
    },
    {
      imgUrl:
        "https://xevt.blob.core.windows.net/images/2021/04/18/ezrxmuuuaefced-focus-0-0-730-410.jpg",
      title: "Decomisan más de 171 mil cubrebocas N95 falsificados en Houston",
      desc: "La Aduana y Protección Fronteriza de Estados Unidos, interceptaron un cargamento de 171 mil 460 cubrebocas N95 falsificadas procedentes de China, en el puerto marítimo de Houston.",
      href: "https://www.xevt.com/internacional/decomisan-mas-de-171-mil-cubrebocas-n95-falsificados-en-houston/147415",
    },
    {
      imgUrl:
        "http://www.medicina.uanl.mx/wp-content/uploads/2020/12/protective-mask-5021416-1920-1300x867.jpg",
      title: "COVID-19: Uso de cubrebocas",
      desc: "Actualmente se recomienda el uso de cubrebocas o tapabocas para reducir el riesgo de transmisión del virus COVID-19. Los cubrebocas deben de ser de tela.",
      href: "http://www.medicina.uanl.mx/noticias/coronavirus/covid-19-uso-de-cubrebocas/",
    },
  ];

  return (
    <div className="news" id="news">
      <div className="news__main">
        {identifier === news.length ? (
          <video src={video} autoPlay />
        ) : (
          <img src={news[identifier].imgUrl} alt="" />
        )}
        <div className="info">
          <h4>
            {identifier !== news.length
              ? news[identifier].title
              : "Doble cubrebocas"}
          </h4>
          <p>
            {identifier !== news.length
              ? news[identifier].desc
              : "Usar doble cubrebocas para la proteccion contra covid hasta en un 96%"}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={identifier !== news.length ? news[identifier].href : ""}
          >
            Ver Completo
          </a>
        </div>
      </div>

      <ul className="news__list">
        {news.map(({ title, imgUrl, desc }, idx) => (
          <li key={idx} onClick={() => setIdentifier(idx)}>
            <img src={imgUrl} alt="main" />
            <div className="info">
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </li>
        ))}
        <li onClick={() => setIdentifier(news.length)}>
          <video src={video} alt="main" />
          <div className="info">
            <h5>Doble cubrebocas</h5>
            <p>
              Usar doble cubrebocas para la proteccion contra covid hasta en un
              96%
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
