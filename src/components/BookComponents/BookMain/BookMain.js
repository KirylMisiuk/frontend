import React, { PureComponent } from 'react';
import Pagination from '../../Pagination';
import BookList from '../BookList';
import SearchBar from '../../SearchBar';


class BookMain extends PureComponent {
  render() {
    return (
      <div>
        <SearchBar location="books" />
        <Pagination />
        <BookList />
      </div>
    );
  }
}

export default BookMain;
