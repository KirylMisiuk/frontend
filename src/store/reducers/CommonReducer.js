import {
  CURRENT_PAGE,
  initalState, ITEM_COUNT, SEARCH_ITEMS, SEARCH_ITEMS_FAIL, SEARCH_ITEMS_SUCCESS,
} from './ReducerTypes/CommonTypes';

const commonReducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case ITEM_COUNT: {
      return {
        ...state,
        ItemCount: action.ItemCount,
      };
    }
    case SEARCH_ITEMS: {
      return {
        ...state,
        loading: true,
        search: action.search,
      };
    }
    case SEARCH_ITEMS_SUCCESS: {
      return {
        ...state,
        status: action.status,
        foundData: action.data,
        loading: false,
      };
    }
    case SEARCH_ITEMS_FAIL: {
      return {
        ...state,
        status: action.status,
        error: action.message,
      };
    }
    default:
      return state;
  }
};

export const common = {
  common: commonReducer,
};
