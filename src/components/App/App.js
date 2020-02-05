import React, { PureComponent } from 'react';
import '../styles.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import BookList from '../BookList';
import BookPage from '../BookPage';
import Navbar from '../Navbar';
import EditBook from '../EditBook';
import CreateBook from '../CreateBook';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={BookList} exact />
          <Route path="/books/:id" component={BookPage} />
          <Route path="/edit/book/:_id" component={EditBook} />
          <Route path="/create/book" component={CreateBook} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
