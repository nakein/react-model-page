import { galeryData } from "../Data";
import { Link } from "react-router-dom";
import CardItem from "../cards/CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <Link to="/" className="cards-btn">
        <i className="bi bi-arrow-left"></i>
      </Link>
      <h1>GALERÍA</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {galeryData.map((photo, index) => (
            <CardItem
              src={photo.image}
              srcMobile={photo.imageSafari}
              label={photo.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
