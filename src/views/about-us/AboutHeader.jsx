import { Carousel } from "react-responsive-carousel";
import img01 from "../../assets/img/01.jpeg";
import img02 from "../../assets/img/02.jpeg";
import img03 from "../../assets/img/03.jpeg";
import img04 from "../../assets/img/04.jpeg";
import img05 from "../../assets/img/05.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const AboutHeader = () => {
  return (
    <div className="about-header" id="main">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img alt="img01" src={img01} />
        </div>
        <div>
          <img alt="img02" src={img02} />
        </div>
        <div>
          <img alt="img03" src={img03} />
        </div>
        <div>
          <img alt="img04" src={img04} />
        </div>
        <div>
          <img alt="img05" src={img05} />
        </div>
        <div>
          <img alt="img04" src={img04} />
        </div>
        <div>
          <img alt="img05" src={img05} />
        </div>
      </Carousel>
      <div className="about-header__info">
        <h4>Descripcion</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          commodi minima magnam, tenetur autem rem quia sit distinctio,
          voluptatem vel modi vero architecto blanditiis a laboriosam nesciunt,
          nihil delectus non repellat sint quasi provident voluptas. Nisi cum
          laborum maxime non!
        </p>
      </div>
    </div>
  );
};
