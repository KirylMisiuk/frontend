import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {Link} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import LibraryAction from '../../../store/actions/LibraryAction'
import LibraryEffects from "../../../store/effects/LibraryEffects";
import {selectError, selectStatus} from "../../../store/selectors/LibrarySelector";
import image from "../../../images/library.png";
import {connect} from "react-redux";
import CommonAction from "../../../store/actions/CommonAction";
import CommonEffects from "../../../store/effects/CommonEffects";
class LibraryListItem extends PureComponent {
    static propTypes = {
        library: PropTypes.object.isRequired,
        error: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        getCount:PropTypes.func.isRequired,
        getPaginatedLibraries:PropTypes.func.isRequired
    };
    state = {
        isMouseOver: false
    };
    handleMouseOver = () => this.setState({isMouseOver: true});
    handleMouseLeave = () => this.setState({isMouseOver: false});
    handleDeleteButton = () => {
        const {library} = this.props;
        this.props.delete(library._id)
    };

    render() {
        const {library} = this.props;
        const {isMouseOver} = this.state;
        return (
            <div className="card" key={library._id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <div className="card-image">
                    <img src={image} alt={library.name}/>
                    <span className="card-title">{library.name}</span>
                    {isMouseOver && (
                        <Link to={`/libraries/${library._id}`}>
                            <span className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">remove_red_eye</i></span>
                        </Link>
                    )}
                </div>

                <div className="card-content">
                    <div className="title"><div><p>{library.about}</p></div></div>
                    <Rating name="size-medium" value={null} />
                </div>
                {isMouseOver && (
                    <div className="icons">
                        <Link to={`/edit/library/${library._id}`}>
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
const libraryActions = new LibraryAction();
const libraryEffects = new LibraryEffects(libraryActions);
const commonAction = new CommonAction();
const commonEffects = new CommonEffects(commonAction);
const mapStateToProps = (state) => ({
    error: selectError(state),
    loading: selectStatus(state),
});
const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch(libraryEffects.delete(id));
        },
        getPaginatedLibraries: (count, size) => { dispatch(libraryEffects.getLibraries(count, size)); },
        getCount: () => { dispatch(commonEffects.getCount('libraries')); },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LibraryListItem);
