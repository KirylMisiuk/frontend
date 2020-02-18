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
  UpdateBookFail, UpdateBooksState,
  UpdateBookSuccess,
} from './ActionTypes/BookTypes';


class BookAction {
  loadingBooks() {
    return {
      type: BooksLoad,
    };
  }

  loadBooksFail(error) {
    return {
      type: FailLoadBooks,
      ...error,
    };
  }

  loadBooksSuccess(books) {
    return {
      type: LoadBooksSuccess,
      ...books,
    };
  }

  loadingBook() {
    return {
      type: BookLoad,
    };
  }

  loadBookFail(error) {
    return {
      type: FailLoadBook,
      ...error,
    };
  }

  loadBookSuccess(book) {
    return {
      type: LoadBookSuccess,
      ...book,
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
      ...book,
    };
  }

  deleteBookFail(error) {
    return {
      type: FailDeleteBook,
      ...error,
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
      ...book,
    };
  }

  updateBookFail(error) {
    return {
      type: UpdateBookFail,
      ...error,
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
      ...book,
    };
  }

  createBookFail(error) {
    return {
      type: CreateBookFail,
      ...error,
    };
  }

  updateState({ data }) {
    return {
      type: UpdateBooksState,
      foundData: data,
    };
  }
}

export default BookAction;
