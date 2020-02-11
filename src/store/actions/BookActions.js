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
  LoadBookSuccess, SearchBook, SearchBookFail, SearchBookSuccess,
  UpdateBook,
  UpdateBookFail,
  UpdateBookSuccess,
  CurrentPage, BookCountFail, BookCount,
} from './BookActionsTypes';


class BookActions {
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

  searchBook(search) {
    return {
      type: SearchBook,
      search,
    };
  }

  searchBookSuccess(books) {
    return {
      type: SearchBookSuccess,
      ...books,
    };
  }

  searchBookFail(error) {
    return {
      type: SearchBookFail,
      ...error,
    };
  }

  getCurrentPage(currentPage) {
    return {
      type: CurrentPage,
      currentPage,
    };
  }

  getBookCount({ data }) {
    return {
      type: BookCount,
      bookCount: data.length,
    };
  }

  getBookCountFail(error) {
    return {
      type: BookCountFail,
      ...error,
    };
  }
}

export default BookActions;
