import React, { PureComponent } from 'react';
import '../styles.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import BookList from '../BookComponents/BookList';
import BookPage from '../BookComponents/BookPage';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import ModifyBook from '../BookComponents/ModifyBook';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Switch>
          <Route path="/" component={BookList} exact />
          <Route path="/books/:id" component={BookPage} />
          <Route path="/edit/book/:_id" component={ModifyBook} />
          <Route path="/create/book" component={ModifyBook} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
