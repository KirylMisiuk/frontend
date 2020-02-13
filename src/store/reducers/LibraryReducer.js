
import {
  CURRENT_PAGE,
  FAIL_LOAD_LIBRARIES,
  initalState,
  LIBRARIES_LOAD,
  LIBRARY_COUNT,
  LOAD_LIBRARIES_SUCCESS,
} from './ReducerTypes/LibraryTypes';


const libraryReducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case LIBRARIES_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_LIBRARIES_SUCCESS: {
      return {
        ...state,
        status: action.status,
        libraries: action.data,
        loading: false,
      };
    }

    case FAIL_LOAD_LIBRARIES: {
      return {
        ...state,
        status: action.status,
        loading: false,
        error: action.message,
      };
    }
    case CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case LIBRARY_COUNT: {
      return {
        ...state,
        bookCount: action.bookCount,
      };
    }
    default:
      return state;
  }
};

export const library = {
  libraries: libraryReducer,
};
