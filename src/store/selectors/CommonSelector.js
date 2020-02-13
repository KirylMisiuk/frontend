const getState = (state) => state.common;
const selectCount = (state) => getState(state).ItemCount;
const selectPageSize = (state) => getState(state).pageSize;
const selectCurrentPage = (state) => getState(state).currentPage;
export {
  selectCurrentPage,
  selectCount,
  selectPageSize,
};
