import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BookActions from '../../store/actions/BookActions';
import ActionCreators from '../../store/effects/BookEffects';
import {selectSearch} from "../../store/selectors/BookSelectors";


class SearchBar extends PureComponent {

    HandleSearch = (e) => {
        this.props.find(e.target.value)
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
search: selectSearch(state)
});
const mapDispatchToProps = (dispatch) => ({
  find: (data) => {
    dispatch(actionCreators.search(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
