import reducer from '../articles';
import * as actionTypes from '../actionTypes';
import { articles } from '../../../data';

describe('Articles reducer', () => {
  it('should set loading flag on request', () => {
    const initialState = { data: [], loading: false };
    const action = {
      type: actionTypes.ARTICLES_REQUEST,
    };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(true);
  });

  it('should parse response', () => {
    const initialState = { data: [], loading: true };
    const action = {
      type: actionTypes.ARTICLES_SUCCESS,
      payload: { articles }
    };
    const state = reducer(initialState, action);

    expect(state.data).toEqual(articles.data);
  });
});