import React, { PureComponent } from 'react';
import '../styles.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import BookPage from '../BookComponents/BookPage';
import Navbar from '../Navbar';
import ModifyBook from '../BookComponents/ModifyBook';
import ModifyLibrary from '../LibraryComponents/ModifyLibrary';
import BookMain from '../BookComponents/BookMain';
import LibraryMain from '../LibraryComponents/LibraryMain';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={BookMain} exact />
          <Route path="/books/:id" component={BookPage} />
          <Route path="/create/book" component={ModifyBook} />
          <Route path="/edit/book/:_id" component={ModifyBook} />

          <Route path="/libraries" component={LibraryMain} exact />
          <Route path="/edit/library/:_id" component={ModifyLibrary} />
          <Route path="/create/library" component={ModifyLibrary} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
