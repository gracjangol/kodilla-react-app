import shortid from 'shortid';

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'app/columns/ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
