import {BookLoad, BooksLoad, FailLoadBook,
  FailLoadBooks, LoadBooksSuccess, LoadBookSuccess} from "./BookActionsTypes";


class BookActions {
  loadingBooks() {
    return {
      type: BooksLoad,
    };
  }

  loadBooksFail(bool) {
    return {
      type: FailLoadBooks,
      hasErrored: bool
    };
  }

  loadBooksSuccess(books) {
    return {
      type: LoadBooksSuccess,
      books
    };
  }

  loadingBook(bool) {
    return {
      type: BookLoad,
      isLoading: bool
    };
  }

  loadBookFail(bool) {
    return {
      type: FailLoadBook,
      hasErrored: bool
    };
  }

  loadBookSuccess(book) {
    return {
      type: LoadBookSuccess,
      book
    };
  }
}

export default BookActions
