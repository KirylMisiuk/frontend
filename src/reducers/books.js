const initalState = {
  books: []
};
// Constants
const LOAD_BOOKS = 'LOAD_BOOKS';
const FAIL_LOAD_BOOKS = 'FAIL_LOAD_BOOKS';
const books = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
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
    type: LOAD_BOOKS,
    payload: res
  }))
  .catch((e) => dispatch({
    type: FAIL_LOAD_BOOKS,
    message: e
  }));


// Selectors
const getState = (state) => state.books;
const selectBooks = (state) => getState(state).books;

export default books;
export {
  // actions
  loadBooks,

  // selectors
  selectBooks

};
