const getState = (state) => state.common;
const selectCount = (state) => getState(state).ItemCount;
const selectPageSize = (state) => getState(state).pageSize;
const selectCurrentPage = (state) => getState(state).currentPage;
const selectSearch = (state) => getState(state).search;
const selectData = (state) => getState(state).foundData;
export {
  selectCurrentPage,
  selectCount,
  selectPageSize,
  selectSearch,
  selectData,
};
