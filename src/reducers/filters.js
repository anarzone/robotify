import { SET_FILTERTEXT } from '../constants';

const initialStateFilters = {
  filterText: '',
}

export default (state = initialStateFilters, action)=>{
  switch(action.type){
    case SET_FILTERTEXT:
      return {filterText: action.payload};
    default:
      return state;
  }
}