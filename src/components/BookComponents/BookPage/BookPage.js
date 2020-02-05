import React, {PureComponent} from 'react';
import './styles.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BookActions from '../../../store/actions/BookActions';
import {selectBook, selectStatus, selectError} from '../../../store/selectors/BookSelectors';
import ActionCreators from '../../../store/effects/BookEffects';

class BookPage extends PureComponent {
  static propTypes = {
    book: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.getOne();
  }

  render() {
    const {error, loading, book} = this.props;
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
      return <p>Loading…</p>;
    }
    return (
      <div className="book-container">
        <div className="book-info">
          <ul>
            <li>
                Name:
              {book.name}
            </li>
            <li>
                Author:
              {book.author}
            </li>
            <li>
                pageCount:
              {book.pageCount}
            </li>
            <li>
                Year:
              {book.year}
            </li>
            <li>
              {book.title}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);

const mapStateToProps = (state) => ({
  book: selectBook(state),
  loading: selectStatus(state),
  error: selectError(state)
});
const mapDispatchToProps = (dispatch, props) => {
  const {match: {params}} = props;
  return {
    getOne: () => { dispatch(actionCreators.getOne(params.id)); }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
