
class BookEffects {
  constructor(bookActions) {
    this.bookActions = bookActions;
  }

  getAll() {
    return (dispatch) => {
      dispatch(this.bookActions.loadingBooks());
      fetch('http://localhost:2000/books')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res;
        })
        .then((res) => res.json())
        .then(({ data }) => dispatch(this.bookActions.loadBooksSuccess(data)))
        .catch(() => dispatch(this.bookActions.loadBooksFail(true)));
    };
  }

  getOne(_id) {
    return (dispatch) => {
      dispatch(this.bookActions.loadingBook(true));
      fetch(`http://localhost:2000/books/${_id}`)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res;
        })
        .then((res) => res.json())
        .then(({ data }) => dispatch(this.bookActions.loadBookSuccess(data)))
        .catch((err) => dispatch(this.bookActions.loadBookFail(err)));
    };
  }

  delete(_id) {
    return (dispatch) => {
      dispatch(this.bookActions.deleteBook());
      fetch(`http://localhost:2000/books?_id=${_id}`, { method: 'DELETE' })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res;
        })
        .then((res) => res.json())
        .then(({ data }) => dispatch(this.bookActions.deleteBookSuccess(data)))
        .catch((err) => dispatch(this.bookActions.deleteBookFail(err)));
    };
  }

  update(_id, book) {
    return (dispatch) => {
      dispatch(this.bookActions.updateBook());
      fetch(`http://localhost:2000/books/${_id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res;
        })
        .then((res) => res.json())
        .then(({ data }) => dispatch(this.bookActions.updateBookSuccess(data)))
        .catch((err) => dispatch(this.bookActions.updateBookFail(err)));
    };
  }

  create(book) {
      console.log(book);
    return (dispatch) => {
      dispatch(this.bookActions.createBook());
      fetch('http://localhost:2000/books', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res;
        })
        .then((res) => res.json())
        .then(({ data }) => dispatch(this.bookActions.createBookSuccess(data)))
        .catch((err) => dispatch(this.bookActions.createBookFail(err)));
    };
  }
}
export default BookEffects;
