class BookActions {
  loadingBooks(bool) {
    return {
      type: 'BOOKS_LOAD',
      isLoading: bool
    };
  }

  loadBooksFail(bool) {
    return {
      type: 'FAIL_LOAD_BOOKS',
      hasErrored: bool
    };
  }

  loadBooksSuccess(books) {
    return {
      type: 'LOAD_BOOKS_SUCCESS',
      books
    };
  }

  loadingBook(bool) {
    return {
      type: 'BOOK_LOAD',
      isLoading: bool
    };
  }

  loadBookFail(bool) {
    return {
      type: 'FAIL_LOAD_BOOK',
      hasErrored: bool
    };
  }

  loadBookSuccess(books) {
    return {
      type: 'LOAD_BOOK_SUCCESS',
      books
    };
  }
}

module.exports = BookActions;
