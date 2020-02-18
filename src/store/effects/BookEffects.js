import axios from 'axios';

class BookEffects {
  constructor(bookAction) {
    this.bookAction = bookAction;
  }

  getPaginatedBooks(bookCount, bookSize) {
    return (dispatch) => {
      dispatch(this.bookAction.loadingBooks());
      axios(`http://localhost:2000/books?count=${bookCount}&size=${bookSize}`)
        .then(({ data }) => {
          dispatch(this.bookAction.loadBooksSuccess(data));
        })
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookAction.loadBooksFail({ message }));
          } else {
            dispatch(this.bookAction.loadBooksFail(response.data));
          }
        });
    };
  }

  getOne(_id) {
    return (dispatch) => {
      dispatch(this.bookAction.loadingBook(true));
      axios(`http://localhost:2000/books/${_id}`)
        .then(({ data }) => dispatch(this.bookAction.loadBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookAction.loadBookFail({ message }));
          } else {
            dispatch(this.bookAction.loadBookFail(response.data));
          }
        });
    };
  }

  delete(_id) {
    return (dispatch) => {
      dispatch(this.bookAction.deleteBook());
      axios.delete(`http://localhost:2000/books?_id=${_id}`)
        .then(({ data }) => dispatch(this.bookAction.deleteBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookAction.deleteBookFail({ message }));
          } else {
            dispatch(this.bookAction.deleteBookFail(response.data));
          }
        });
    };
  }

  update(_id, book) {
    return (dispatch) => {
      dispatch(this.bookAction.updateBook());
      axios.put(`http://localhost:2000/books/${_id}`, book)
        .then(({ data }) => dispatch(this.bookAction.updateBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookAction.updateBookFail({ message }));
          } else {
            dispatch(this.bookAction.updateBookFail(response.data));
          }
        });
    };
  }

  create(book) {
    return (dispatch) => {
      dispatch(this.bookAction.createBook());
      axios.post('http://localhost:2000/books', book)
        .then(({ data }) => dispatch(this.bookAction.createBookSuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookAction.createBookFail({ message }));
          } else {
            dispatch(this.bookAction.createBookFail(response.data));
          }
        });
    };
  }
}
export default BookEffects;
