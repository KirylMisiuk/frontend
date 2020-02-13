const getState = (state) => state.libraries;
const selectLibraries = (state) => getState(state).libraries;
const selectLibrary = (state) => getState(state).library;
const selectStatus = (state) => getState(state).loading;
const selectError = (state) => getState(state).error;
const selectSearch = (state) => getState(state).search;
export {
  selectLibraries,
  selectStatus,
  selectError,
  selectLibrary,
  selectSearch,
};
