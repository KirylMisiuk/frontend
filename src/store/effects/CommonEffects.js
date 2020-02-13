import axios from 'axios';

class CommonEffects {
  constructor(commonAction) {
    this.commonAction = commonAction;
  }

  getCount(type, search = '') {
    return (dispatch) => {
      axios(`http://localhost:2000/${type}?search=${search}`)
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
}


export default CommonEffects;
