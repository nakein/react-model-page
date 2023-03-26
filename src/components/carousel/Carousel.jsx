import { useState, useEffect } from "react";
import Image1 from "../../assets/Image1.JPG";
import Image2 from "../../assets/Image2.JPG";
import Image3 from "../../assets/Image3.JPG";
import "./Carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    { id: "1", image: Image1 },
    { id: "2", image: Image2 },
    { id: "3", image: Image3 },
  ];

  const mod = (n, m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    }, 3000);
  }, [index]);

  return (
    <div className="carousel">
      {cards.map((item, i) => {
        const indexLeft = mod(index - 1, cards.length);
        const indexRight = mod(index + 1, cards.length);

        let className = "";

        if (i === index) {
          className = "card card--active";
        } else if (i === indexRight) {
          className = "card card--right";
        } else if (i === indexLeft) {
          className = "card card--left";
        } else {
          className = "card";
        }

        return (
          <img
            key={item.id}
            src={item.image}
            alt="Model"
            className={className}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
