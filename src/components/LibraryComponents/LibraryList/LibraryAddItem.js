import React, { PureComponent } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class LibraryAddItem extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="add-div">
            <Link to="/create/library">
              <i className="material-icons add-image">add</i>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}
export default LibraryAddItem;
