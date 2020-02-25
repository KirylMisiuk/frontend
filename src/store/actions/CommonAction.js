import {
  CurrentPage, ItemCount, ItemCountFail, ResetState, Search, SearchFail, SearchSuccess,
} from './ActionTypes/CommonTypes';

class CommonAction {
  getCount({ data }) {
    return {
      type: ItemCount,
      ItemCount: data.length,
    };
  }

  getCountFail(error) {
    return {
      type: ItemCountFail,
      ...error,
    };
  }

  getCurrentPage(currentPage) {
    return {
      type: CurrentPage,
      currentPage,
    };
  }

  search(search) {
    return {
      type: Search,
      search,
    };
  }

  searchSuccess(data) {
    return {
      type: SearchSuccess,
      ...data,
    };
  }

  searchFail(error) {
    return {
      type: SearchFail,
      ...error,
    };
  }

  reset() {
    return {
      type: ResetState,
    };
  }
}
export default CommonAction;
