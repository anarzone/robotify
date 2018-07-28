import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS
} from '../constants';


const initialStateRobots = {
  robots: [],
  isPending: false,
  error: ''
}

export default (state = initialStateRobots, action)=>{
  switch(action.type){
    case REQUEST_ROBOTS_PENDING:
      return {
        robots: state.robots,
        isPending: true,
        error: ''
      }
    case REQUEST_ROBOTS_SUCCESS:
      return {
        robots: action.payload,
        isPending: false,
        error: ''
      }  
    case REQUEST_ROBOTS_FAILED:
      return{
        robots: state.robots,
        isPending: false,
        error: action.payload
      }
    default:
      return state;
  }
}