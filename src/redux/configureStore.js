import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/mission';
import { rocketReducer } from './rockets/rocket';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, reduxThunk),
);

export default store;
