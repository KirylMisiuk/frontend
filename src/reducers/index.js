import {combineReducers} from 'redux';
import books from './books';
import libraries from './libraries';

const rootReducer = combineReducers({
  books, libraries
});
export default rootReducer;
