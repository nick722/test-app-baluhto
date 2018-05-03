import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
