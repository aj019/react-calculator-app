import {combineReducers} from 'redux';
import OutputReducer from './reducer-final-output'

const allReducers = combineReducers({
    outputReducer : OutputReducer
});

export default allReducers;