import { createStore } from 'redux';
import listsReducer from './reducers/listsReducer';
import columnsReducer from './reducers/columnsReducer';
import cardsReducer from './reducers/cardsReducer';
import initialState from './initialState';
import searchStringReducer from './reducers/searchStringReducer';

export const addList = (payload) => ({ type: 'app/lists/ADD_LIST', payload });
export const addCard = (payload) => ({ type: 'app/cards/ADD_CARD', payload });
export const addColumn = (payload) => ({ type: 'app/columns/ADD_COLUMN', payload });
export const toggleCardFavorite = (cardId) => ({ type: 'app/cards/TOGGLE_CARD_FAVORITE', payload: cardId });
export const updateSearchString = (payload) => ({ type: 'app/searchString/UPDATE_SEARCHSTRING', payload });
export const removeCard = (cardId) => ({ type: 'app/cards/REMOVE_CARD', payload: cardId });

export const getListById = (state, listId) => state.lists.find(list => list.id === listId);
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);
export const getFilteredCards = (state, columnId) => {
  const { cards, searchString } = state;
  return cards.filter(card =>
    card.columnId === columnId &&
    card.title.toLowerCase().includes(searchString.toLowerCase())
  );
};
export const getAllLists = (state) => state.lists;

const rootReducer = (state = {}, action) => ({
  lists: listsReducer(state.lists, action),
  columns: columnsReducer(state.columns, action),
  cards: cardsReducer(state.cards, action),
  searchString: searchStringReducer(state.searchString, action),
});

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
