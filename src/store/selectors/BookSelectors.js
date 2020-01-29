const getState = (state) => state.books;
const selectBooks = (state) => getState(state).books;
const selectBook = (state) => getState(state).book;
const selectStatus = (state) => getState(state).loading;
const selectError = (state) => getState(state).error;
export {
    selectBooks,
    selectStatus,
    selectError,
    selectBook
};