import {
  BOOK_LOAD,
  BOOKS_LOAD,
  FAIL_LOAD_BOOK,
  FAIL_LOAD_BOOKS,
  initalState,
  LOAD_BOOK_SUCCESS,
  LOAD_BOOKS_SUCCESS,
  DELETE_BOOK,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_SUCCESS,

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
    case DELETE_BOOK: {
      return state;
    }
    case DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        book: state.books.filter((findBook) => action.book.some((delBook) => findBook._id === delBook._id)),
        books: state.books.filter((findBook) => action.book.some((delBook) => findBook._id !== delBook._id)),
      };
    }
    case DELETE_BOOK_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};


export const reducers = {
  books: loadReducer,
};
