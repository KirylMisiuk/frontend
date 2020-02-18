
import {
  CREATE_LIBRARY,
  CREATE_LIBRARY_FAIL,
  CREATE_LIBRARY_SUCCESS,
  DELETE_LIBRARY, DELETE_LIBRARY_FAIL, DELETE_LIBRARY_SUCCESS,
  FAIL_LOAD_LIBRARIES, FAIL_LOAD_LIBRARY,
  initalState,
  LIBRARIES_LOAD,
  LIBRARY_LOAD,
  LOAD_LIBRARIES_SUCCESS, LOAD_LIBRARY_SUCCESS, UPDATE_LIBRARIES_STATE, UPDATE_LIBRARY,
  UPDATE_LIBRARY_FAIL, UPDATE_LIBRARY_SUCCESS,
} from './ReducerTypes/LibraryTypes';


const libraryReducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case LIBRARIES_LOAD:
    case LIBRARY_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_LIBRARIES_SUCCESS:
      return {
        ...state,
        status: action.status,
        libraries: action.data,
        loading: false,
      };

    case LOAD_LIBRARY_SUCCESS:
      return {
        ...state,
        status: action.status,
        library: action.data,
        loading: false,
      };
    case FAIL_LOAD_LIBRARIES:
    case FAIL_LOAD_LIBRARY:
      return {
        ...state,
        status: action.status,
        loading: false,
        error: action.message,
      };

    case DELETE_LIBRARY:
      return {
        ...state,
        delete: false,
        loading: true,
      };

    case DELETE_LIBRARY_SUCCESS:
      return {
        ...state,
        library: state.libraries.filter((findLibrary) => action.data.some((delLibrary) => findLibrary._id === delLibrary._id)),
        libraries: state.libraries.filter((findLibrary) => action.data.some((delLibrary) => findLibrary._id !== delLibrary._id)),
        delete: true,
        loading: false,
      };

    case DELETE_LIBRARY_FAIL:
      return {
        ...state,
        delete: false,
        status: action.status,
        error: action.message,
      };

    case UPDATE_LIBRARY:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_LIBRARY_SUCCESS:
      return {
        ...state,
        library: { ...state.library, ...action.data },
        loading: false,
      };

    case UPDATE_LIBRARY_FAIL:
      return {
        ...state,
        error: action.payload,
      };


    case CREATE_LIBRARY:
      return {
        ...state,
        loading: true,
      };

    case CREATE_LIBRARY_SUCCESS:
      return {
        ...state,
        status: action.status,
        library: action.data,
        loading: false,
      };

    case CREATE_LIBRARY_FAIL:
      return {
        ...state,
        status: action.status,
        error: action.message,
      };
    case UPDATE_LIBRARIES_STATE: {
      return {
        ...state,
        libraries: action.foundData,
      };
    }
    default:
      return state;
  }
};

export const library = {
  libraries: libraryReducer,
};
