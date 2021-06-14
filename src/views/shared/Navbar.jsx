import { Link } from "react-scroll";

import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav>
      <figure>
        <img src={logo} alt="brimar-img" />
      </figure>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            inicio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            productos
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            noticias
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            nosotros
          </Link>
        </li>
      </ul>
    </nav>
  );
};
