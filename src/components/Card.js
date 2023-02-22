import React from "react";

export default function Card({ cards, onCardClick }) {
  return (
    <section className="card" aria-label="Карточки">
      <ul className="card__items">
        {cards.map((obj) => (
          <li className="card__item" key={obj._id}>
            <img
              className="card__image"
              src={obj.link}
              alt={obj.name}
              onClick={() => onCardClick(obj)}
            />
            <div className="card__description">
              <p className="card__title">{obj.name}</p>
              <div className="card__likes">
                <button
                  type="button"
                  className="card__button-likes btn"
                  aria-label="Сердечко"
                ></button>
                <p className="card__likes-count">{obj.likes.length}</p>
              </div>
            </div>
            <button type="button" className="card__button-delete btn"></button>
          </li>
        ))}
      </ul>
    </section>
  );
}
