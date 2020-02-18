import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {selectCurrentPage, selectPageSize,selectSearch} from "../../store/selectors/CommonSelector"
import PropTypes from "prop-types";
import CommonAction from "../../store/actions/CommonAction";
import CommonEffects from "../../store/effects/CommonEffects";
import BookAction from "../../store/actions/BookAction";
import LibraryAction from "../../store/actions/LibraryAction";


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
const bookAction = new BookAction();
const  libraryAction = new LibraryAction();
const commonAction = new CommonAction();

const mapStateToProps = (state) => ({
search: selectSearch(state),
currentPage: selectCurrentPage(state),
    pageSize: selectPageSize(state),
});
const mapDispatchToProps = (dispatch,params) => {
    let commonEffects = new CommonEffects(commonAction, bookAction);
if(params.location==='libraries') {
    commonEffects = new CommonEffects(commonAction,libraryAction);
}
     return {
         find: (data, currentPage, pageSize) => {
             dispatch(commonEffects.search(params.location, data, currentPage, pageSize));
         },
         getCount: (e) => {
             dispatch(commonEffects.getCount(params.location, e));
         },
     }
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
