class BookActions {
  getAllBooks() {
    return (dispatch) => {
      fetch('http://localhost:2000/books')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch({type: 'BOOKS_LOAD', isLoading: false});
          return res;
        })
        .then((res) => res.json())
        .then(({data}) => dispatch({type: 'LOAD_BOOKS_SUCCESS', books: data}))
        .catch(() => dispatch({type: 'FAIL_LOAD_BOOKS', hasErrored: true}));
    };
  }

  getOne(_id) {
    return (dispatch) => {
      fetch(`http://localhost:2000/books/${_id}`)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch({type: 'BOOK_LOAD', isLoading: false});
          return res;
        })
        .then((res) => res.json())
        .then(({data}) => dispatch({type: 'LOAD_BOOK_SUCCESS', books: data}))
        .catch(() => dispatch({type: 'FAIL_LOAD_BOOK', hasErrored: true}));
    };
  }
}

module.exports = BookActions;
