import React, {PureComponent} from 'react';
import '../styles.css';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';

import BookList from '../BookList';
import BookPage from '../BookPage';



class App extends PureComponent {


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

export default App;
