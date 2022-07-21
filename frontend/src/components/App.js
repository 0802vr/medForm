import React from "react";
import Main from "./Main";
import Footer from './Footer'
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/Api";
function App() {
  
   
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
   
  const [isPlace, setPlace] = React.useState(false);

  const deletePlace = () => {
      setPlace(false)
  }
   
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
   

  const closeAllPopups = () => {
     
    
    setAddPlacePopupOpen(false);
     
  }; 
  const getCards = () => {
    api
      .getInitialCards()
      .then((cardList) => {
       /*  console.log(cardList) */
        setCards(cardList); 
        setPlace(true);
      })

      .catch((err) => {
        console.log(err); // тут ловим ошибку
      });
  };
  function handleUpdateCard(card) {
    api
      .addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })

      .catch((err) => {
        console.log(err); // тут ловим ошибку
      });
  }
   
  /* function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards(cards.filter((element) => element !== card));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  } */ 
  return (
    
      <body className="page">
        

        <Main
          onEditProfile={getCards}
          onAddPlace={handleAddPlaceClick} 
          cards={cards}
          place={isPlace}
          deletePlace={deletePlace}
           
        /> 

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onUpdateCard={handleUpdateCard}
           
        />            

      <Footer/>
      </body>
    
  );
}

export default App;
