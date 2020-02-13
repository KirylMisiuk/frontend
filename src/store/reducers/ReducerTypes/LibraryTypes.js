export const initalState = {
  libraries: [],
  loading: false,
  library: {},
  search: '',
  error: false,
  status: false,
  pageSize: 5,
  currentPage: 1,
  libraryCount: 0,
};

export const LIBRARIES_LOAD = 'LIBRARIES_LOAD';
export const LOAD_LIBRARIES_SUCCESS = 'LOAD_LIBRARIES_SUCCESS';
export const FAIL_LOAD_LIBRARIES = 'FAIL_LOAD_LIBRARIES';

export const CURRENT_PAGE = 'CURRENT_PAGE';
export const LIBRARY_COUNT = 'LIBRARY_COUNT';