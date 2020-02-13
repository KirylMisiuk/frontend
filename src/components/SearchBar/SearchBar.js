import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookAction from '../../store/actions/BookAction';
import ActionCreators from '../../store/effects/BookEffects';
import {selectSearch} from "../../store/selectors/BookSelector";
import {selectCurrentPage, selectPageSize} from "../../store/selectors/CommonSelector"
import PropTypes from "prop-types";


class SearchBar extends PureComponent {
    static propTypes = {
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
const bookActions = new BookAction();
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
