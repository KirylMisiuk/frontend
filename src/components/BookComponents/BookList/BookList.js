import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import './styles.css';
import BookActions from '../../../store/actions/BookActions';
import ActionCreators from '../../../store/effects/BookEffects';
import {
  selectBooks,
  selectStatus,
  selectError,
  selectPageSize, selectCurrentPage,
} from '../../../store/selectors/BookSelectors';
import BookAddItem from './BookAddItem';
import PropTypes from "prop-types";

class BookList extends PureComponent {
  static propTypes = {
    currentPage:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    getCount: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    getPaginatedBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getCount();
    this.props.getPaginatedBooks(currentPage, pageSize);
  }

  componentDidUpdate(prevProps) {
    const { currentPage, pageSize } = this.props;
    if (currentPage !== prevProps.currentPage) {
      this.props.getPaginatedBooks(currentPage, pageSize);
    }
  }

  render() {
    const {
      books, error, loading,
    } = this.props;
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
  currentPage: selectCurrentPage(state),
  pageSize: selectPageSize(state),
});
const mapDispatchToProps = (dispatch) => ({
  getPaginatedBooks: (count, size) => { dispatch(actionCreators.getPaginatedBooks(count, size)); },
  getCount: () => { dispatch(actionCreators.getBookCount()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
