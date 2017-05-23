import { combineReducers } from 'redux';
import { CHANGE_VALUE } from './actions';

//Define logic for handling number changes between 0-1000. The var max is set to 1001 
//because the .floor method excludes the max value but includes everything below.

function rng(state = [{value:0,index:0}], action) {
  switch (action.type) {
    case CHANGE_VALUE: 
      var min = 0;

      var max = 1001

      var value = Math.floor(Math.random() * (max - min)) + min;

      return [
        ...state,
        {
          value: value,
          index: state[state.length-1].index+1
        }
      ]
    default:
      return state
  }
};

const todoApp = combineReducers({
  rng
});

export default todoApp;