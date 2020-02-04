import { combineReducers } from 'redux';
import { reducers } from './BookReducers';

const rootReducer = combineReducers(reducers);

export default rootReducer;
