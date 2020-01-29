import {
  BOOK_LOAD,
  BOOKS_LOAD,
  DELETE_BOOK,
  FAIL_LOAD_BOOK,
  FAIL_LOAD_BOOKS,
  initalState,
  LOAD_BOOK_SUCCESS,
  LOAD_BOOKS_SUCCESS,
} from './BookReducerTypes';


const loadReducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case BOOKS_LOAD:
    case BOOK_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.books,
        loading: false,
      };
    }
    case LOAD_BOOK_SUCCESS: {
      return {
        ...state,
        book: action.book,
        loading: false,
      };
    }
    case FAIL_LOAD_BOOKS:
    case FAIL_LOAD_BOOK: {
      return {
        ...state,
        error: action.payload,
      }; }
    default:
      return state;
  }
};

export const reducers = {
  books: loadReducer,
};
