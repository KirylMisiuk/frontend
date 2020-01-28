const initalState = {
  books: []
};
// Constants
const LOAD_BOOKS = 'LOAD_BOOKS';
const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
const FAIL_LOAD_BOOKS = 'FAIL_LOAD_BOOKS';

const LOAD_BOOK = 'LOAD_BOOK';
const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS';
const FAIL_LOAD_BOOK = 'FAIL_LOAD_BOOKS';


const books = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case LOAD_BOOKS:
      return state;
    case LOAD_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.books
      };
    }
    case FAIL_LOAD_BOOKS:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};


// Selectors
const getState = (state) => state.books;
const selectBooks = (state) => getState(state).books;


export default books;
export {
  selectBooks,
};
