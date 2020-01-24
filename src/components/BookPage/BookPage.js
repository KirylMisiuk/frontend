import React, {PureComponent} from 'react';
import './styles.css';


class BookPage extends PureComponent {
  render() {
    const {book} = this.props;
    console.log(book);
    return (
      <div className="book-container">
        <div className="book-info">
          <div className="book-text" />
        </div>
      </div>
    );
  }
}
export default BookPage;
