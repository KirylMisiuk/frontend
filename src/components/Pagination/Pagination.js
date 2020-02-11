import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookActions from '../../store/actions/BookActions';
import ActionCreators from '../../store/effects/BookEffects';
import { selectBookCount, selectCurrentPage, selectPageSize } from '../../store/selectors/BookSelectors';
import PropTypes from "prop-types";

class Pagination extends PureComponent {
  static propTypes = {
    selectCurrentPage: PropTypes.number.isRequired,
    bookCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    getPaginatedBooks:PropTypes.func.isRequired,
    getCurrentPage: PropTypes.func.isRequired
  };
  render() {
    const {
      getCurrentPage, bookCount, pageSize, currentPage,
    } = this.props;
    const pages = [];
    const pagesCount = Math.ceil(bookCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <ul className="pagination">
        <li className={currentPage > 1 ? 'waves-effect' : 'disabled'}><a onClick={() => (currentPage > 1 ? getCurrentPage(currentPage - 1) : getCurrentPage(currentPage))}><i className="material-icons">chevron_left</i></a></li>
        {pages.map((p) => <li className={currentPage === p ? 'active' : 'waves-effect'} key={p}><a onClick={() => { getCurrentPage(p); }}>{p}</a></li>)}
        <li className={currentPage < pagesCount ? 'waves-effect' : 'disabled'}><a onClick={() => (currentPage < pagesCount ? getCurrentPage(currentPage + 1) : getCurrentPage(currentPage))}><i className="material-icons">chevron_right</i></a></li>
      </ul>
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
