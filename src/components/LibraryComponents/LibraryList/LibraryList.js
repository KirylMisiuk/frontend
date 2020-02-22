import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import LibraryListItem from './LibraryListItem';
import './styles.css';
import LibraryAction from '../../../store/actions/LibraryAction';
import LibraryEffects from '../../../store/effects/LibraryEffects';

import PropTypes from "prop-types";
import {selectLibraries,selectStatus,selectError} from "../../../store/selectors/LibrarySelector";
import {selectCurrentPage,selectPageSize} from "../../../store/selectors/CommonSelector"
import CommonAction from "../../../store/actions/CommonAction";
import CommonEffects from "../../../store/effects/CommonEffects";
import LibraryAddItem from "./LibraryAddItem";


class LibraryList extends PureComponent {
    static propTypes = {
        currentPage:PropTypes.number.isRequired,
        pageSize:PropTypes.number.isRequired,
        getCount: PropTypes.func.isRequired,
        error: PropTypes.bool.isRequired,
        getPaginatedLibraries: PropTypes.func.isRequired,
        libraries: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    };
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getCount();
        this.props.getPaginatedLibraries(currentPage, pageSize);
    }
    componentDidUpdate(prevProps) {
        const { currentPage, pageSize } = this.props;
        if (currentPage !== prevProps.currentPage) {
            this.props.getPaginatedLibraries(currentPage, pageSize);
        }
    }
    render() {
        const {
            libraries, error, loading,
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
                    {libraries.map((library) => (
                        <LibraryListItem library={library} key={library._id} />
                    ))}
                    <LibraryAddItem />
                </div>
            </div>
        );
    }
}

const libraryActions = new LibraryAction();
const libraryEffects = new LibraryEffects(libraryActions);
const commonAction = new CommonAction();
const commonEffects = new CommonEffects(commonAction);

const mapStateToProps = (state) => ({
    libraries: selectLibraries(state),
    loading: selectStatus(state),
    error: selectError(state),
    currentPage: selectCurrentPage(state),
    pageSize: selectPageSize(state),
});
const mapDispatchToProps = (dispatch) => ({
    getPaginatedLibraries: (count, size) => { dispatch(libraryEffects.getLibraries(count, size)); },
    getCount: () => { dispatch(commonEffects.getCount('libraries')); },
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);
