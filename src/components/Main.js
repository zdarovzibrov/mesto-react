import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          onClick={onEditAvatar}
          src={userAvatar}
          alt="Аватар"
          className="profile__avatar"
        />
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button btn"
            onClick={onEditProfile}
          ></button>
          <p className="profile__work">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button btn"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="card" aria-label="Карточки">
        <ul className="card__items">
          {cards.map((obj) => (
            <Card key={obj._id} obj={obj} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
