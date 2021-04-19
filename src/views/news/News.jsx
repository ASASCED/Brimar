import React from "react";
import imgNew from "../../assets/img/05.jpeg";
import mask from "../../assets/img/mask.jpg";

export const News = () => {
  return (
    <div className="news" id="news">
      <div className="news__main">
        <img src={imgNew} alt="" />
        <div className="info">
          <h4>Noticia</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, deserunt! Eos explicabo unde dolore in magni quisquam
            ipsam eum libero?
          </p>
        </div>
      </div>

      <ul className="news__list">
        {[...Array(6)].map(() => (
          <li>
            <img src={mask} alt="main" />
            <div className="info">
              <h5>Noticia</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, laborum?
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
