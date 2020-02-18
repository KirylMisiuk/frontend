import { Field } from 'redux-form';
import React, { PureComponent } from 'react';
import InputField from './InputField';
import './styles.css';

class IdField extends PureComponent {
  render() {
    const { fields } = this.props;
    return (
      <iv className="custom-field-array-container">
        {fields.map((code, index) => (
          <div key={index} className="field-array-item">
            <Field
              name={code}
              type="text"
              component={InputField}
              label={`book #${index + 1}`}
            />
            <button className="waves-effect waves-light btn-small red " type="button" onClick={() => fields.remove(index)}>
                            &times;
            </button>
          </div>
        ))}
        <button className="waves-effect waves-light btn-small " type="button" onClick={() => fields.push()}>
                    Add
          {' '}
          {!fields.length ? 'book' : 'Another book'}
        </button>
      </iv>

    );
  }
}
export default IdField;
