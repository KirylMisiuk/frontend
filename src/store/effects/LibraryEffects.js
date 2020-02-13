import axios from 'axios';

class LibraryEffects {
  constructor(bookActions) {
    this.bookActions = bookActions;
  }

  getLibraries(libraryCount, librarySize) {
    return (dispatch) => {
      dispatch(this.bookActions.loadingLibraries());
      axios(`http://localhost:2000/libraries?count=${libraryCount}&size=${librarySize}`)
        .then(({ data }) => {
          dispatch(this.bookActions.loadLibrariesSuccess(data));
        })
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.bookActions.loadLibrariesFail({ message }));
          } else {
            dispatch(this.bookActions.loadLibrariesFail(response.data));
          }
        });
    };
  }
}
export default LibraryEffects;
