import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import BookListItem from './BookListItem';
import './styles.css';
import {selectBooks} from '../../reducers/books';
import BookActions from '../../actions/BookActions';

class BookList extends PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }
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
const mapDispatchToProps = (dispatch) => {
  const bookActions = new BookActions();
  return {
    fetchData: () => { dispatch(bookActions.getAllBooks()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
