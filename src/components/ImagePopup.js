import React from "react";

export default function ImagePopup({ card, onClose }) {
  return (
    <>
      {card && (
        <div className="popup popup_type_image-preview popup_opened">
          <div className="popup__image-container">
            <img className="popup__image" src={card.link} alt={card.name} />
            <p className="popup__image-description">{card.name}</p>
            <button
              onClick={onClose}
              type="button"
              className="popup__close-button btn"
              aria-label="Закрытие popup"
            ></button>
          </div>
        </div>
      )}
    </>
  );
}
