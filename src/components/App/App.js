import React, { PureComponent } from 'react';
import '../styles.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import BookList from '../BookComponents/BookList';
import BookPage from '../BookComponents/BookPage';
import EditBook from '../BookComponents/EditBook';
import CreateBook from '../BookComponents/CreateBook';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';



class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <SearchBar />
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
