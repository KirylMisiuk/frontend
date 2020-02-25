import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {Link} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import BookAction from '../../../store/actions/BookAction'
import ActionCreators from "../../../store/effects/BookEffects";
import {selectError, selectStatus} from "../../../store/selectors/BookSelector";
import {connect} from "react-redux";
import img from '../../../images/book.png'
import CommonAction from "../../../store/actions/CommonAction";
import CommonEffects from "../../../store/effects/CommonEffects";
import {selectCurrentPage, selectPageSize} from "../../../store/selectors/CommonSelector";
class BookListItem extends PureComponent {
    static propTypes = {
        book: PropTypes.object.isRequired,
        error: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        getPaginatedBooks: PropTypes.func.isRequired,
        getCount: PropTypes.func.isRequired
    };
    state = {
        isMouseOver: false
    };
    handleMouseOver = () => this.setState({isMouseOver: true});
    handleMouseLeave = () => this.setState({isMouseOver: false});
     handleDeleteButton = () => {
       const {book} = this.props;
       this.props.delete(book._id);
    };


    render() {
        const {book} = this.props;
        const {isMouseOver} = this.state;
        return (
            <div className="card" key={book._id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <div className="card-image">
                    <img src={img} alt={book.name} />
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
                        <div onClick={this.handleDeleteButton}  className='book-delete'>
                            <i className='material-icons'>delete</i>
                        </div>
                    </div>
                )}
            </div>

        );
    }
}
const bookActions = new BookAction();
const bookEffects = new ActionCreators(bookActions);
const commonAction = new CommonAction();
const commonEffects = new CommonEffects(commonAction);

const mapStateToProps = (state) => ({
    error: selectError(state),
    loading: selectStatus(state),
    currentPage: selectCurrentPage(state),
    pageSize: selectPageSize(state),
});
const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch(bookEffects.delete(id));
        },
        getPaginatedBooks: (count, size) => { dispatch(bookEffects.getPaginatedBooks(count, size)); },
        getCount: () => { dispatch(commonEffects.getCount('books')); },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);
