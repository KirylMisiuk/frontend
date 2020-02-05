import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import './styles.css';
import BookActions from '../../store/actions/BookActions';
import ActionCreators from '../../store/effects/BookEffects';
import { selectBooks, selectStatus, selectError } from '../../store/selectors/BookSelectors';
import BookAddItem from './BookAddItem';

class BookList extends PureComponent {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { books, error, loading } = this.props;
    if (error) {
      return (
        <p>
        Error:
          {' '}
          {error}
        </p>
      );
    }
    if (loading) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }

    return (
      <div className="container">
        <h3 className="center">Our Books</h3>
        <div className="box">
          {books.map((book) => (
            <BookListItem book={book} key={book._id} />
          ))}
          <BookAddItem />
        </div>
      </div>
    );
  }
}

const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);


const mapStateToProps = (state) => ({
  books: selectBooks(state),
  loading: selectStatus(state),
  error: selectError(state),
});
const mapDispatchToProps = (dispatch) => ({
  getAll: () => { dispatch(actionCreators.getAll()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
