import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as api from '../../../api';
import * as data from '../../../data';
import { loadArticles, articles as articlesResponse } from '../actions';
import * as actionTypes from '../actionTypes';

jest.mock('../../../api', () => {
  const { articles } = require('../../../data');
  return {
    loadArticles: () => Promise.resolve(articles),
  };
});

const mockStore = configureMockStore([ thunk ]);

describe('Articles actions', () => {
  it('calls request an success actions for successful fetch response', async () => {
    const store = mockStore();
    await store.dispatch(loadArticles());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: actionTypes.ARTICLES_REQUEST });
    expect(actions[1]).toEqual({ type: actionTypes.ARTICLES_SUCCESS, payload: { articles: data.articles } });
  });
});