import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/mission';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, reduxThunk),
);

export default store;
