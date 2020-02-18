export const initalState = {
  libraries: [],
  loading: false,
  library: {},
  error: false,
  status: false,
  pageSize: 5,
  currentPage: 1,
  libraryCount: 0,
};

export const LIBRARIES_LOAD = 'LIBRARIES_LOAD';
export const LOAD_LIBRARIES_SUCCESS = 'LOAD_LIBRARIES_SUCCESS';
export const FAIL_LOAD_LIBRARIES = 'FAIL_LOAD_LIBRARIES';

export const LIBRARY_LOAD = 'LIBRARY_LOAD';
export const LOAD_LIBRARY_SUCCESS = 'LOAD_LIBRARY_SUCCESS';
export const FAIL_LOAD_LIBRARY = 'FAIL_LOAD_LIBRARY';

export const DELETE_LIBRARY = 'DELETE_LIBRARY';
export const DELETE_LIBRARY_SUCCESS = 'DELETE_LIBRARY_SUCCESS';
export const DELETE_LIBRARY_FAIL = 'DELETE_LIBRARY_FAIL';

export const UPDATE_LIBRARY = 'UPDATE_LIBRARY';
export const UPDATE_LIBRARY_SUCCESS = 'UPDATE_LIBRARY_SUCCESS';
export const UPDATE_LIBRARY_FAIL = 'UPDATE_LIBRARY_FAIL';

export const CREATE_LIBRARY = 'CREATE_LIBRARY';
export const CREATE_LIBRARY_SUCCESS = 'CREATE_LIBRARY_SUCCESS';
export const CREATE_LIBRARY_FAIL = 'CREATE_LIBRARY_FAIL';

export const UPDATE_LIBRARIES_STATE = 'UPDATE_LIBRARIES_STATE';
