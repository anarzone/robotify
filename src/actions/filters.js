import { SET_FILTERTEXT } from '../constants';

// set filter text 
export const setFilterText = (filterText)=>({
  type: SET_FILTERTEXT,
  payload: filterText,
})


