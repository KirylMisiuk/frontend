const getState = (state) => state.books;
const selectBooks = (state) => getState(state).books;
const selectBook = (state) => getState(state).book;
const selectStatus = (state) => getState(state).loading;
const selectError = (state) => getState(state).error;
const selectSearch = (state) => getState(state).search;
const selectCurrentPage = (state) => getState(state).currentPage;
const selectBookCount = (state) => getState(state).bookCount;
const selectPageSize = (state) => getState(state).pageSize;

export {
  selectBooks,
  selectStatus,
  selectError,
  selectBook,
  selectSearch,
  selectCurrentPage,
  selectBookCount,
  selectPageSize,
};
