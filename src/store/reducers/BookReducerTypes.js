export const initalState = {
  books: [],
  loading: false,
  book: {},
  search: '',
  error: false,
  status: false,
  pageSize: 5,
  currentPage: 1,
  bookCount: 0,
};

export const BOOKS_LOAD = 'BOOKS_LOAD';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const FAIL_LOAD_BOOKS = 'FAIL_LOAD_BOOKS';

export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAIL = 'DELETE_BOOK_FAIL';

export const BOOK_LOAD = 'BOOK_LOAD';
export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS';
export const FAIL_LOAD_BOOK = 'FAIL_LOAD_BOOK';

export const UPDATE_BOOK = 'UPDATE_BOOK';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const UPDATE_BOOK_FAIL = 'UPDATE_BOOK_FAIL';

export const CREATE_BOOK = 'CREATE_BOOK';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_BOOK_FAIL = 'CREATE_BOOK_FAIL';

export const SEARCH_BOOK = 'SEARCH_BOOK';
export const SEARCH_BOOK_SUCCESS = 'SEARCH_BOOK_SUCCESS';
export const SEARCH_BOOK_FAIL = 'SEARCH_BOOK_FAIL';

export const CURRENT_PAGE = 'CURRENT_PAGE';
export const BOOK_COUNT = 'BOOK_COUNT';
