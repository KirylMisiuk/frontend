import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import BookListItem from './BookListItem';
import './styles.css';
import BookActions from '../../actions/BookActions';
import ActionCreators from '../../actions/ActionCreators';
import {selectBooks} from '../../reducers/books';

class BookList extends PureComponent {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const {books} = this.props;
    console.log(books);
    return (
      <div className="dashboard-container">
        {books.map((book) => (
          <BookListItem book={book} key={book._id} />
        ))}
      </div>
    );
  }
}

const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);


const mapStateToProps = (state) => ({
  books: selectBooks(state)
});
const mapDispatchToProps = (dispatch) => ({
  getAll: () => { dispatch(actionCreators.getAll()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
