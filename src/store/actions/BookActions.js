import {
  BookLoad,
  BooksLoad,
  CreateBook,
  CreateBookFail,
  CreateBookSuccess,
  DeleteBook,
  DeleteBookSuccess,
  FailDeleteBook,
  FailLoadBook,
  FailLoadBooks,
  LoadBooksSuccess,
  LoadBookSuccess,
  UpdateBook,
  UpdateBookFail,
  UpdateBookSuccess,
} from './BookActionsTypes';


class BookActions {
  loadingBooks() {
    return {
      type: BooksLoad,
    };
  }

  loadBooksFail(bool) {
    return {
      type: FailLoadBooks,
      hasErrored: bool,
    };
  }

  loadBooksSuccess(books) {
    return {
      type: LoadBooksSuccess,
      books,
    };
  }

  loadingBook(bool) {
    return {
      type: BookLoad,
      isLoading: bool,
    };
  }

  loadBookFail(bool) {
    return {
      type: FailLoadBook,
      hasErrored: bool,
    };
  }

  loadBookSuccess(book) {
    return {
      type: LoadBookSuccess,
      book,
    };
  }

  deleteBook() {
    return {
      type: DeleteBook,
    };
  }

  deleteBookSuccess(book) {
    return {
      type: DeleteBookSuccess,
      book,
    };
  }

  deleteBookFail(bool) {
    return {
      type: FailDeleteBook,
      hasErrored: bool,
    };
  }

  updateBook() {
    return {
      type: UpdateBook,
    };
  }

  updateBookSuccess(book) {
    return {
      type: UpdateBookSuccess,
      book,
    };
  }

  updateBookFail(bool) {
    return {
      type: UpdateBookFail,
      hasErrored: bool,
    };
  }
  createBook() {
    return {
      type: CreateBook,
    };
  }

  createBookSuccess(book) {
    return {
      type: CreateBookSuccess,
      book,
    };
  }

  createBookFail(bool) {
    return {
      type: CreateBookFail,
      hasErrored: bool,
    };
  }

}

export default BookActions;
