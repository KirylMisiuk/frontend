import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class BookListItem extends PureComponent {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const {book} = this.props;
    return (
      <div className="dashboard-item">
        <h1>{book._id}</h1>
        <ul>
          <li>
            Name:
            {book.name}
          </li>
          <li>
            Author:
            {book.author}
          </li>
          <li>
            pageCount:
            {book.pageCount}
          </li>
          <li>
            Year:
            {book.year}
          </li>
        </ul>
      </div>
    );
  }
}
export default BookListItem;
