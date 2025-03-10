const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'app/searchString/UPDATE_SEARCHSTRING':
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
