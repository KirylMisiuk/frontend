import axios from 'axios';

class CommonEffects {
  constructor(commonAction, anotherAction) {
    this.commonAction = commonAction;
    this.anotherAction = anotherAction;
  }

  getCount(location, search = '') {
    return (dispatch) => {
      axios(`http://localhost:2000/${location}?search=${search}`)
        .then(({ data }) => {
          dispatch(this.commonAction.getCount(data));
        })
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.commonAction.getCountFail({ message }));
          } else {
            dispatch(this.commonAction.getCountFail(response.data));
          }
        });
    };
  }

  search(location, search, currentPage, bookSize) {
    return (dispatch) => {
      dispatch(this.commonAction.search(search));
      axios(`http://localhost:2000/${location}?search=${search}&count=${currentPage}&size=${bookSize}`)
        .then(({ data }) => {
          dispatch(this.commonAction.searchSuccess(data));
          dispatch(this.anotherAction.updateState(data));
        })
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.commonAction.searchFail({ message }));
          } else {
            dispatch(this.commonAction.searchFail(response.data));
          }
        });
    };
  }
}


export default CommonEffects;
