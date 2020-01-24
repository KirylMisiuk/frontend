import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {selectBooks} from '../../reducers/books';
import BookListItem from './BookListItem';
import './styles.css';

class BookList extends PureComponent {
  render() {
    const {books} = this.props;
    return (
      <div className="dashboard-container">
        {books.map((book) => (
          <BookListItem book={book} key={book._id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: selectBooks(state)
});

export default connect(mapStateToProps)(BookList);
