import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import './styles.css';
import BookAction from '../../../store/actions/BookAction';
import BookEffects from '../../../store/effects/BookEffects';
import CommonAction from "../../../store/actions/CommonAction";
import CommonEffects from "../../../store/effects/CommonEffects";
import {
  selectBooks,
  selectStatus,
  selectError,
} from '../../../store/selectors/BookSelector';
import {  selectPageSize, selectCurrentPage} from '../../../store/selectors/CommonSelector'
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

const bookActions = new BookAction();
const bookEffects = new BookEffects(bookActions);
 const commonAction = new CommonAction();
 const commonEffects = new CommonEffects(commonAction);

const mapStateToProps = (state) => ({
  books: selectBooks(state),
  loading: selectStatus(state),
  error: selectError(state),
  currentPage: selectCurrentPage(state),
  pageSize: selectPageSize(state),
});
const mapDispatchToProps = (dispatch) => ({
  getPaginatedBooks: (count, size) => { dispatch(bookEffects.getPaginatedBooks(count, size)); },
  getCount: () => { dispatch(commonEffects.getCount('books')); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
