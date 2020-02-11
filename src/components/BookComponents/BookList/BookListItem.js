import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {Link} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import BookActions from '../../../store/actions/BookActions'
import ActionCreators from "../../../store/effects/BookEffects";
import {selectError, selectStatus} from "../../../store/selectors/BookSelectors";
import {connect} from "react-redux";
class BookListItem extends PureComponent {
  static propTypes = {
    book: PropTypes.object.isRequired,
      error: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired,
      isMouseOver: PropTypes.bool.isRequired,
      handleMouseOver:PropTypes.func.isRequired,
      handleMouseLeave:PropTypes.func.isRequired,

  };
    state = {
        isMouseOver: false
    };
    handleMouseOver = () => this.setState({isMouseOver: true});
    handleMouseLeave = () => this.setState({isMouseOver: false});
    handleDeleteButton = () => {
    const {book} = this.props;
     this.props.delete(book._id)
  };

  render() {
    const {book} = this.props;
    const {isMouseOver} = this.state;
    return (
        <div className="card" key={book._id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
          <div className="card-image">
            <img src='https://cdn.dribbble.com/users/803982/screenshots/2286778/13_-_play_edicola.png' alt={book.name} />
            <span className="card-title">{book.name}</span>
              {isMouseOver && (
            <Link to={`/books/${book._id}`}>
             <span className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">remove_red_eye</i></span>
            </Link>
              )}
          </div>

          <div className="card-content">
              <div className="title"><div><p>{book.title}</p></div></div>
              <Rating name="size-medium" value={null} />
              <p><b>Price: {book.price}$</b></p>
          </div>
            {isMouseOver && (
                <div className="icons">
                    <Link to={`/edit/book/${book._id}`}>
                    <div  className='book-delete'>
                        <i className='material-icons'>edit</i>
                    </div>
                     </Link>
                    <div onClick={this.handleDeleteButton} className='book-delete'>
                        <i className='material-icons'>delete</i>
                    </div>
                </div>
                  )}
        </div>

    );
  }
}
const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);

const mapStateToProps = (state) => ({
  error: selectError(state),
    loading: selectStatus(state),
});
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      dispatch(actionCreators.delete(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);
