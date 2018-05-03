import * as actionTypes from './actionTypes';


const initialState = {
  data: [],
  loading: false,
}

// TODO:
// Set loading flags
// Parse api response

function articles(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.ARTICLES_SUCCESS:
      return {
        ...state,
        data: action.payload.articles.data,
      };
    default:
      return state;
  }
}

export default articles;
