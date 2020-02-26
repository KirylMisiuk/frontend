import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

class InputField extends PureComponent {
    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        type:PropTypes.string.isRequired
    };
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
