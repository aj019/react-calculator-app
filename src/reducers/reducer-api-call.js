import {List,Map, fromJS} from 'immutable';

const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = fromJS({
  fetching: false,
  dog: null,
  error: null
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return state.set('fetching',true).set('error',null);
    case API_CALL_SUCCESS:
      return state.set('fetching',false).set('dog',action.dog);
    case API_CALL_FAILURE:
    return state.set('fetching',false).set('dog',null).set('error',action.error);
   
  }
  return state;
}