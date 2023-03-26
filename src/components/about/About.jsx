import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import Button from "../button/Button";
import fullbody from "../../assets/fullbody.JPG";
import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container" id="about-container">
        <div className="row">
          <div className="col">
            <img
              className="img-fullbody"
              src={fullbody}
              alt="Justina Guerrero"
            />
          </div>
          <div className="col">
            <h1>
              <b>ABOUT ME</b>
            </h1>
            <p>
              Mi nombre es Justina Guerrero, tengo 18 años de edad y soy de la
              ciudad de La Plata. Soy modelo freelancer y creadora de contenido.
            </p>
            <div className="contact-info">
              <Button
                href="https://www.instagram.com/justina_guerrero/"
                icon="bi bi-instagram"
                username="justina_guerrero"
              />
              <Button
                href="http://www.tiktok.com/@rubia.tiktoker"
                icon="bi bi-tiktok"
                username="rubia.tiktoker"
              />
            </div>
            <div className="gallery-btns">
              <Link to="/gallery" className="about-btn">
                Ver Galería <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="carousel-container">
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
