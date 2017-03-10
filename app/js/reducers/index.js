import { combineReducers } from 'redux'
import _ from 'lodash';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return state.concat(action.user, {'visitor':''})
    break;
    case 'TRACK_SEARCH_CHANGE':
      return state
        .slice(0, state.length-1)
        .concat({"visitor":action.visitorName})
    break;
    case 'SORT_ASC':
      var newArray =  _.sortBy(state.slice(0, state.length-1), 'name');
          newArray = newArray.concat(_.last(state))
      return newArray
    break;
    case 'SORT_DESC':
      var newArray =  _.orderBy(state.slice(0, state.length-1), ['name'],['desc']);
          newArray = newArray.concat(_.last(state))
      return newArray
    break;
    default:
      return state;
  }
};

const cardDetailReducer = (state = {}, {type, cardDetail}) => {
  switch (type) {
    case 'SET_CARD_DETAIL':
      return cardDetail;
    default:
      return state;
  }
};

export default combineReducers({
  userReducer,
  cardDetailReducer
});
