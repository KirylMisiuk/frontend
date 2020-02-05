import React, { PureComponent } from 'react';

class InputField extends PureComponent {
  render() {
    const { input, meta, label, type } = this.props;
    return (
      <div className="input-field col s12">
        <input {...input} type={type} />
        <label className="active" htmlFor={label}>{label}</label>
          {(meta.error && meta.touched) && <span style={{color: 'red'}}>{meta.error}</span>}
      </div>
    );
  }
}
export default InputField;
