import React, { PureComponent } from 'react';

class InputField extends PureComponent {
  render() {
    const { input, label, type } = this.props;
    return (
      <div className="input-field col s12">
        <input {...input} type={type} />
        <label className="active" htmlFor={label}>{label}</label>
      </div>
    );
  }
}
export default InputField;
