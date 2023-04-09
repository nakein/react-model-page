import { useState } from "react";
import Modal from "../Modal";

const CardItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <Modal>
          <div className="cards__modal">
            <button
              onClick={() => setShowModal(false)}
              className="cards__button"
            >
              <i className="bi bi-x"></i>
            </button>
            <img
              src={props.src}
              alt="Justina Guerrero"
              className="cards__modal__image"
            />
          </div>
        </Modal>
      ) : null}
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <button
              onClick={() => setShowModal(true)}
              className="cards__item__label"
            >
              <img
                className="cards__item__img"
                alt="Justina Guerrero"
                src={props.src}
              />
            </button>
          </figure>
        </div>
      </li>
    </>
  );
};

export default CardItem;
