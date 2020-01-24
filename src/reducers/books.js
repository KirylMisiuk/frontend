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
    case LOAD_BOOK:
    case LOAD_BOOKS:
      return state;
    case LOAD_BOOKS_SUCCESS: {
      return {
        ...state,
        books: [...action.payload]
      };
    }
    case LOAD_BOOK_SUCCESS: {
      return state.books.find((b) => b._id === action.payload);
    }
    case FAIL_LOAD_BOOK:
    case FAIL_LOAD_BOOKS:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
// Actions
const loadBooks = () => (dispatch) => fetch('http://localhost:2000/books')
  .then((res) => res.json())
  .then(({data}) => data)
  .then((res) => dispatch({
    type: LOAD_BOOKS_SUCCESS,
    payload: res
  }))
  .catch((e) => dispatch({
    type: FAIL_LOAD_BOOKS,
    message: e
  }));

const loadBook = (_id) => (dispatch) => fetch(`http://localhost:2000/${_id}`)
  .then((res) => res.json())
  .then(({data}) => data)
  .then((res) => dispatch({
    type: LOAD_BOOK_SUCCESS,
    payload: res
  }))
  .catch((e) => dispatch({
    type: FAIL_LOAD_BOOK,
    message: e
  }));

// Selectors
const getState = (state) => state.books;
const selectBooks = (state) => getState(state).books;

export default books;
export {
  // actions
  loadBooks,
  loadBook,
  // selectors
  selectBooks,
};
