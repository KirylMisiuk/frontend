import {
  FailLoadLibraries,
  LibrariesLoad,
  LoadLibrariesSuccess,
} from './ActionTypes/LibraryTypes';


class LibraryAction {
  loadingLibraries() {
    return {
      type: LibrariesLoad,
    };
  }

  loadLibrariesFail(error) {
    return {
      type: FailLoadLibraries,
      ...error,
    };
  }

  loadLibrariesSuccess(libraries) {
    return {
      type: LoadLibrariesSuccess,
      ...libraries,
    };
  }
}
export default LibraryAction;
