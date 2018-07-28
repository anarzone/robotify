import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchRobots from '../reducers/robots';
import fetchFilters from '../reducers/filters';

export default ()=>{
  return createStore(
    combineReducers({
      fetchRobots,
      fetchFilters,
    }),
    applyMiddleware(thunk),
)}
