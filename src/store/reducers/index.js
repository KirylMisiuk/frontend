import { combineReducers } from 'redux';
import { reducers } from './BookReducer';
import { library } from './LibraryReducer';
import { common } from './CommonReducer';

const rootReducer = combineReducers({ ...reducers, ...library, ...common });

export default rootReducer;
