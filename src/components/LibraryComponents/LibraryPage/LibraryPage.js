import React, {PureComponent} from 'react';
import './styles.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LibraryAction from '../../../store/actions/LibraryAction';
import {selectStatus, selectError, selectLibrary} from '../../../store/selectors/LibrarySelector';
import LibraryEffects from '../../../store/effects/LibraryEffects';

class LibraryPage extends PureComponent {
    static propTypes = {
        library: PropTypes.object.isRequired,
        error: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        getOne: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getOne();
    }

    render() {
        const {
            library, error, loading,
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
            <div className="library-container">
                <div className="library-info">
                    <ul>
                        <li>
                            Name:
                            {library.name}
                        </li>
                        <li>
                            About:
                            {library.about}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const libraryActions = new LibraryAction();
const libraryEffects = new LibraryEffects(libraryActions);

const mapStateToProps = (state) => ({
    library: selectLibrary(state),
    loading: selectStatus(state),
    error: selectError(state)
});
const mapDispatchToProps = (dispatch, props) => {
    const {match: {params}} = props;
    return {
        getOne: () => { dispatch(libraryEffects.getOne(params.id)); }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
