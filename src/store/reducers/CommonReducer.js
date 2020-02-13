import {
  CURRENT_PAGE,
  initalState, ITEM_COUNT,
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
    default:
      return state;
  }
};

export const common = {
  common: commonReducer,
};
