import React, {PureComponent} from 'react';
import '../styles.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import BookList from '../BookList';
import BookPage from '../BookPage';

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
          <Route path="/" component={BookList} exact />
          <Route path="/books/:id" component={BookPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null, {loadBooks})(App);
