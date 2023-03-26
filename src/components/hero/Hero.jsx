import { Link } from "react-scroll";
import video from "../../assets/video-1.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>JUSTINA GUERRERO</h1>
      <div className="hero-btns">
        <Link
          to="about-container"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          <button className="hero-btn">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
