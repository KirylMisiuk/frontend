import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookActions from '../../store/actions/BookActions';
import ActionCreators from '../../store/effects/BookEffects';
import {selectCurrentPage, selectPageSize, selectSearch} from "../../store/selectors/BookSelectors";
import PropTypes from "prop-types";


class SearchBar extends PureComponent {
    static propTypes = {
        HandleSearch: PropTypes.func.isRequired,
        search:PropTypes.string.isRequired,
        currentPage:PropTypes.number.isRequired,
        pageSize:PropTypes.number.isRequired,
        find:PropTypes.func.isRequired,
        getCount: PropTypes.func.isRequired
    };
     HandleSearch = (e) => {
        const{currentPage,pageSize}= this.props;
        this.props.find(e.target.value,currentPage,pageSize);
        this.props.getCount(e.target.value)
    };
  render() {
      const {search} = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search-example"
                type="search"
                name="search"
                value={search}
                placeholder="What should I do?"
                onChange={this.HandleSearch}
              />
              <label className="label-icon" htmlFor="search-example">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}
const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);

const mapStateToProps = (state) => ({
search: selectSearch(state),
currentPage: selectCurrentPage(state),
    pageSize: selectPageSize(state),
});
const mapDispatchToProps = (dispatch) => ({
  find: (data,currentPage,pageSize) => {
    dispatch(actionCreators.search(data,currentPage,pageSize));
  },
    getCount: (e) => { dispatch(actionCreators.getBookCount(e)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
