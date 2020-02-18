import React, { PureComponent } from 'react';
import Pagination from '../../Pagination';
import LibraryList from '../LibraryList';
import SearchBar from '../../SearchBar';


class LibraryMain extends PureComponent {
  render() {
    return (
      <div>
        <SearchBar location="libraries" />
        <Pagination />
        <LibraryList />
      </div>
    );
  }
}

export default LibraryMain;
