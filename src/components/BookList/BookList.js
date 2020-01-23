import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {selectBooks} from '../../reducers/books';

class BookList extends PureComponent {
  render() {
    return (
      <div> </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: selectBooks(state)
});

export default connect(mapStateToProps)(BookList);
