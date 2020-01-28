class ActionCreators {
  constructor(bookActions) {
    this.bookActions = bookActions;
  }

  getAll() {
    return (dispatch) => {
      dispatch(this.bookActions.loadingBooks(true));
      fetch('http://localhost:2000/books')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch(this.bookActions.loadingBooks(false));
          return res;
        })
        .then((res) => res.json())
        .then(({data}) => dispatch(this.bookActions.loadBooksSuccess(data)))
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
          dispatch(this.bookActions.loadingBook(false));
          return res;
        })
        .then((res) => res.json())
        .then(({data}) => dispatch(this.bookActions.loadBookSuccess(data)))
        .catch(() => dispatch(this.bookActions.loadBookFail(true)));
    };
  }
}
module.exports = ActionCreators;
