import { reducer as formReducer } from 'redux-form';
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
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAIL,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK,
  CREATE_BOOK_FAIL,
  SEARCH_BOOK_FAIL,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK,
  BOOK_COUNT,
  CURRENT_PAGE,

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
        status: action.status,
        books: action.data,
        loading: false,
      };
    }
    case LOAD_BOOK_SUCCESS: {
      return {
        ...state,
        status: action.status,
        book: action.data,
        loading: false,
      };
    }
    case FAIL_LOAD_BOOKS:
    case FAIL_LOAD_BOOK: {
      return {
        ...state,
        status: action.status,
        loading: false,
        error: action.message,
      }; }

    case DELETE_BOOK: {
      return {
        ...state,
        delete: false,
        loading: true,
      };
    }
    case DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        book: state.books.filter((findBook) => action.data.some((delBook) => findBook._id === delBook._id)),
        books: state.books.filter((findBook) => action.data.some((delBook) => findBook._id !== delBook._id)),
        delete: true,
        loading: false,
      };
    }
    case DELETE_BOOK_FAIL: {
      return {
        ...state,
        delete: false,
        status: action.status,
        error: action.message,
      };
    }

    case UPDATE_BOOK: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_BOOK_SUCCESS: {
      return {
        ...state,
        book: { ...state.book, ...action.data },
        loading: false,
      };
    }
    case UPDATE_BOOK_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CREATE_BOOK: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_BOOK_SUCCESS: {
      return {
        ...state,
        status: action.status,
        book: action.data,
        loading: false,
      };
    }
    case CREATE_BOOK_FAIL: {
      return {
        ...state,
        status: action.status,
        error: action.message,
      };
    }


    case SEARCH_BOOK: {
      return {
        ...state,
        loading: true,
        search: action.search,
      };
    }
    case SEARCH_BOOK_SUCCESS: {
      return {
        ...state,
        status: action.status,
        books: action.data,
        loading: false,
      };
    }
    case SEARCH_BOOK_FAIL: {
      return {
        ...state,
        status: action.status,
        error: action.message,
      };
    }
    case CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case BOOK_COUNT: {
      return {
        ...state,
        bookCount: action.bookCount,
      };
    }
    default:
      return state;
  }
};

export const reducers = {
  books: loadReducer,
  form: formReducer,
};
