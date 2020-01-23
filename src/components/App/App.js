import React, {PureComponent} from 'react';
import '../styles.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BookList from '../BookList';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import {loadBooks} from '../../reducers/books';

class App extends PureComponent {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {loadBooks} = this.props;
    loadBooks();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={BookList} exact/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null, {loadBooks})(App);
