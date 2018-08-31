import {combineReducers} from 'redux';
import OutputReducer from './reducer-final-output'
import ApiReducer from './reducer-api-call'
const allReducers = combineReducers({
    outputReducer : OutputReducer,
    apiReducer : ApiReducer
});

export default allReducers;