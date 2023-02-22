import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(data) {
    setSelectedCard(data);
    console.log(data);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="profile-info"
        buttonText="Создать"
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_user_name"
          id="user-name-input"
          name="userName"
          type="text"
          placeholder="Представьтесь"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error user-name-input-error"></span>
        <input
          className="form__input form__input_user_work"
          id="user-work-input"
          name="userWork"
          type="text"
          placeholder="Ваша работа"
          autoComplete="off"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error user-work-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="add-card"
        buttonText="Создать"
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_card_name"
          id="add-card-input"
          name="cardName"
          type="text"
          placeholder="Название"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error add-card-input-error"></span>
        <input
          className="form__input form__input_card_link"
          id="card-link-input"
          name="cardLink"
          type="url"
          placeholder="Ссылка на изображение"
          autoComplete="off"
          required
        />
        <span className="form__input-error card-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="del-confirm"
        buttonText="Да"
      ></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="upd-ava"
        buttonText="Создать"
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_avatar_link"
          id="ava-url-input"
          name="cardLink"
          type="url"
          placeholder="Ссылка на изображение"
          autoComplete="off"
          required
        />
        <span className="form__input-error ava-url-input-error"></span>
      </PopupWithForm>

      {/* <template id="card-template">
       
      </template> */}
    </div>
  );
}

export default App;
