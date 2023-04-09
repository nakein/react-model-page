import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    { id: "1", image: "https://ik.imagekit.io/wackwoszd/tr:w-400/Image1.JPG" },
    { id: "2", image: "https://ik.imagekit.io/wackwoszd/tr:w-400/Image2.JPG" },
    { id: "3", image: "https://ik.imagekit.io/wackwoszd/tr:w-400/Image3.JPG" },
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
            alt="Justina Guerrero"
            className={className}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
