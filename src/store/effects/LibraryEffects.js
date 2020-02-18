import axios from 'axios';

class LibraryEffects {
  constructor(libraryAction) {
    this.libraryAction = libraryAction;
  }

  getLibraries(libraryCount, librarySize) {
    return (dispatch) => {
      dispatch(this.libraryAction.loadingLibraries());
      axios(`http://localhost:2000/libraries?count=${libraryCount}&size=${librarySize}`)
        .then(({ data }) => {
          dispatch(this.libraryAction.loadLibrariesSuccess(data));
        })
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.libraryAction.loadLibrariesFail({ message }));
          } else {
            dispatch(this.libraryAction.loadLibrariesFail(response.data));
          }
        });
    };
  }

  delete(_id) {
    return (dispatch) => {
      dispatch(this.libraryAction.deleteLibrary());
      axios.delete(`http://localhost:2000/libraries?_id=${_id}`)
        .then(({ data }) => dispatch(this.libraryAction.deleteLibrarySuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.libraryAction.deleteLibraryFail({ message }));
          } else {
            dispatch(this.libraryAction.deleteLibraryFail(response.data));
          }
        });
    };
  }

  getOne(_id) {
    return (dispatch) => {
      dispatch(this.libraryAction.loadLibrary(true));
      axios(`http://localhost:2000/libraries/${_id}`)
        .then(({ data }) => dispatch(this.libraryAction.loadLibrarySuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.libraryAction.loadLibraryFail({ message }));
          } else {
            dispatch(this.libraryAction.loadLibraryFail(response.data));
          }
        });
    };
  }

  update(_id, library) {
    return (dispatch) => {
      dispatch(this.libraryAction.updateLibrary());
      axios.put(`http://localhost:2000/libraries/${_id}`, library)
        .then(({ data }) => dispatch(this.libraryAction.updateLibrarySuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.libraryAction.updateLibraryFail({ message }));
          } else {
            dispatch(this.libraryAction.updateLibraryFail(response.data));
          }
        });
    };
  }

  create(library) {
    return (dispatch) => {
      dispatch(this.libraryAction.createLibrary());
      axios.post('http://localhost:2000/libraries', library)
        .then(({ data }) => dispatch(this.libraryAction.createLibrarySuccess(data)))
        .catch(({ response, message }) => {
          if (!response) {
            dispatch(this.libraryAction.createLibraryFail({ message }));
          } else {
            dispatch(this.libraryAction.createLibraryFail(response.data));
          }
        });
    };
  }
}
export default LibraryEffects;
