import axios from 'axios';

class BookEffects {
  constructor(bookActions) {
    this.bookActions = bookActions;
  }

  getAll() {
    return (dispatch) => {
      dispatch(this.bookActions.loadingBooks());
      axios('http://localhost:2000/books')
        .then(({ data }) => dispatch(this.bookActions.loadBooksSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.loadBooksFail({ message }));
          } else {
            dispatch(this.bookActions.loadBooksFail(response.data));
          }
        });
    };
  }

  getOne(_id) {
    return (dispatch) => {
      dispatch(this.bookActions.loadingBook(true));
      axios(`http://localhost:2000/books/${_id}`)
        .then(({ data }) => dispatch(this.bookActions.loadBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.loadBookFail({ message }));
          } else {
            dispatch(this.bookActions.loadBookFail(response.data));
          }
        });
    };
  }

  delete(_id) {
    return (dispatch) => {
      dispatch(this.bookActions.deleteBook());
      axios.delete(`http://localhost:2000/books?_id=${_id}`)
        .then(({ data }) => dispatch(this.bookActions.deleteBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.deleteBookFail({ message }));
          } else {
            dispatch(this.bookActions.deleteBookFail(response.data));
          }
        });
    };
  }

  update(_id, book) {
    return (dispatch) => {
      dispatch(this.bookActions.updateBook());
      axios.put(`http://localhost:2000/books/${_id}`, book)
        .then(({ data }) => dispatch(this.bookActions.updateBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.updateBookFail({ message }));
          } else {
            dispatch(this.bookActions.updateBookFail(response.data));
          }
        });
    };
  }

  create(book) {
    return (dispatch) => {
      dispatch(this.bookActions.createBook());
      axios.post('http://localhost:2000/books', book)
        .then(({ data }) => dispatch(this.bookActions.createBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.createBookFail({ message }));
          } else {
            dispatch(this.bookActions.createBookFail(response.data));
          }
        });
    };
  }

  search(param) {
    return (dispatch) => {
      dispatch(this.bookActions.searchBook(param));
      axios(`http://localhost:2000/books?search=${param}`)
        .then(({ data }) => dispatch(this.bookActions.searchBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.searchBookFail({ message }));
          } else {
            dispatch(this.bookActions.searchBookFail(response.data));
          }
        });
    };
  }
}
export default BookEffects;
