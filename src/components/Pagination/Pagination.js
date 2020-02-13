import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookActions from '../../store/actions/BookActions';
import ActionCreators from '../../store/effects/BookEffects';
import { selectBookCount, selectCurrentPage, selectPageSize } from '../../store/selectors/BookSelectors';
import PropTypes from "prop-types";
import './styles.css'
import ReactPaginate from 'react-paginate';

class Pagination extends PureComponent {
  static propTypes = {
    bookCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    getPaginatedBooks:PropTypes.func.isRequired,
    getCurrentPage: PropTypes.func.isRequired
  };
  handlePageClick = data =>{
    const {getCurrentPage} = this.props;
    getCurrentPage(data.selected+1)
  };
  render() {
    const {pageSize,bookCount} = this.props;
    const pagesCount = Math.ceil(bookCount / pageSize);
    return (
        <div className="center">
          <h3>Our Books</h3>
          <ReactPaginate
              previousLabel={'chevron_left'}
              nextLabel={'chevron_right'}
              nextLinkClassName={'material-icons'}
              previousLinkClassName={'material-icons'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pagesCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
          />
        </div>

    );
  }
}
const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);

const mapStateToProps = (state) => ({
  currentPage: selectCurrentPage(state),
  pageSize: selectPageSize(state),
  bookCount: selectBookCount(state),

});
const mapDispatchToProps = (dispatch) => ({
  getCurrentPage: (page) => {
    dispatch(bookActions.getCurrentPage(page));
  },
  getPaginatedBooks: (count, size) => { dispatch(actionCreators.getPaginatedBooks(count, size)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
