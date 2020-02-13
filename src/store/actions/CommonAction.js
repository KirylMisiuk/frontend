import {CurrentPage, ItemCount, ItemCountFail} from './ActionTypes/CommonTypes';

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
}
export default CommonAction;
