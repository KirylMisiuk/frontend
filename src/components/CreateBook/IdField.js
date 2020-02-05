import { Field } from 'redux-form';
import React from 'react';
import InputField from './InputField';
import './styles.css';

export const discounts = ({ fields }) => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={index} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={InputField}
          label={`libraryId #${index + 1}`}
        />
        <button className="waves-effect waves-light btn-small red " type="button" onClick={() => fields.remove(index)}>
                    &times;
        </button>
      </div>
    ))}
    <button className="waves-effect waves-light btn-small " type="button" onClick={() => fields.push()}>
            Add
      {' '}
      {!fields.length ? 'libraryId' : 'Another libraryId'}
    </button>
  </div>
);
