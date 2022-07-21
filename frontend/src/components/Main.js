import React from "react";
import Card from "./Card";

function Main({ cards, onEditProfile, onAddPlace, deletePlace, place }) {

  
  return (
    <main className="content">
      <p className="content__title">Добро пожаловать</p>
      <div className="content__place">
        <p className="content__subtitle">
          Если Вы хотите посмотреть отчет по карточкам то нажмите эту кнопку
        </p>
        <button
        type="button"
        className="content__edit-button"
        onClick={() => onEditProfile()}
      >Посмотреть карточки
      </button>
      <button type="button" className="content__delete-button" aria-label="delete" onClick={() => deletePlace()}>
        Убрать отчет
      </button>
      </div>
      
      <div className="content__place">
        <p className="content__subtitle">Если Вы хотите создать новую карточку то нажмите эту кнопку</p>
        <button
          type="button"
          aria-label="добавить"
          className="content__add-button"
          onClick={() => onAddPlace()}
        >
          Добавить карточку
        </button>
      </div>
      {place ? (
        <ul className="photo-grid">
          {cards.map((element, index) => (
            <Card key={index} card={element} />
          ))}
        </ul>
      ) : null}
    </main>
  );
}

export default Main;
