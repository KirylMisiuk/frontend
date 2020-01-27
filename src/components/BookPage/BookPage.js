import React, {PureComponent} from 'react';
import './styles.css';
import {connect} from 'react-redux';
import BookActions from '../../actions/BookActions';
import {selectBook, selectBooks} from '../../reducers/books';


class BookPage extends PureComponent {
  componentDidMount() {
    this.props.getById();
  }

  render() {
    const {book} = this.props;
    console.log(book);
    return (
      <div className="book-container">
        <div className="book-info">
          <div className="book-text" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  book: selectBooks(state)
});
const mapDispatchToProps = (dispatch,props) => {
  const {match: {params}} = props;
  const bookActions = new BookActions();
  return {
    getById: () => { dispatch(bookActions.getOne(params.id)); }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
