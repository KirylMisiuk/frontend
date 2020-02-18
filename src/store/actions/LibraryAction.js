import {
  CreateLibrary,
  CreateLibraryFail,
  CreateLibrarySuccess,
  DeleteLibrary,
  DeleteLibrarySuccess,
  FailDeleteLibrary,
  FailLoadLibraries,
  FailLoadLibrary,
  LibrariesLoad,
  LibraryLoad,
  LoadLibrariesSuccess,
  LoadLibrarySuccess,
  UpdateLibrariesState,
  UpdateLibrary,
  UpdateLibraryFail,
  UpdateLibrarySuccess,
} from './ActionTypes/LibraryTypes';
import { UpdateBooksState } from './ActionTypes/BookTypes';


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

  loadLibrary() {
    return {
      type: LibraryLoad,
    };
  }

  loadLibraryFail(error) {
    return {
      type: FailLoadLibrary,
      ...error,
    };
  }

  loadLibrarySuccess(library) {
    return {
      type: LoadLibrarySuccess,
      ...library,
    };
  }

  deleteLibrary() {
    return {
      type: DeleteLibrary,
    };
  }

  deleteLibrarySuccess(library) {
    return {
      type: DeleteLibrarySuccess,
      ...library,
    };
  }

  deleteLibraryFail(error) {
    return {
      type: FailDeleteLibrary,
      ...error,
    };
  }

  updateLibrary() {
    return {
      type: UpdateLibrary,
    };
  }

  updateLibrarySuccess(book) {
    return {
      type: UpdateLibrarySuccess,
      ...book,
    };
  }

  updateLibraryFail(error) {
    return {
      type: UpdateLibraryFail,
      ...error,
    };
  }

  createLibrary() {
    return {
      type: CreateLibrary,
    };
  }

  createLibrarySuccess(book) {
    return {
      type: CreateLibrarySuccess,
      ...book,
    };
  }

  createLibraryFail(error) {
    return {
      type: CreateLibraryFail,
      ...error,
    };
  }

  updateState({ data }) {
    return {
      type: UpdateLibrariesState,
      foundData: data,
    };
  }
}
export default LibraryAction;
