import * as actionTypes from './actionTypes';
import * as api from '../../api';

const requestArticles = () => ({
  type: actionTypes.ARTICLES_REQUEST,
});

const requestArticlesSuccess = (articles) => ({
  type: actionTypes.ARTICLES_SUCCESS,
  payload: { articles },
})

function loadArticles() {
  return async (dispatch) => {
    dispatch(requestArticles());
    const articles = await api.loadArticles();
    dispatch(requestArticlesSuccess(articles));
  };
}

export { loadArticles };
