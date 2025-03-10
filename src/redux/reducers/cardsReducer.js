import shortid from 'shortid';

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'app/cards/ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'app/cards/TOGGLE_CARD_FAVORITE':
      return statePart.map(card =>
        card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
      );
    case 'app/cards/REMOVE_CARD':
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;
