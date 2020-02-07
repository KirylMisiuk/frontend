import React, { PureComponent } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import BookActions from '../../../store/actions/BookActions';
import { selectError } from '../../../store/selectors/BookSelectors';
import ActionCreators from '../../../store/effects/BookEffects';
import InputField from './InputField';
import { date, required } from './validation';
import IdField from './IdField';


class CreateBook extends PureComponent {
  onSubmit(e) {
    this.props.create(e);
  }

  render() {
    const { handleSubmit, invalid } = this.props;
    return (
      <form className="col s12  input" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="name"
          label="Name"
          type="text"
          component={InputField}
          validate={required}
        />
        <div className="row">
          <Field
            name="author"
            label="Author"
            type="text"
            component={InputField}
            validate={required}
          />
        </div>
        <div className="row">
          <Field
            name="pageCount"
            label="Page Count"
            type="number"
            component={InputField}
            validate={required}
          />
          <Field
            name="title"
            label="title"
            type="text"
            component={InputField}
            validate={required}
          />
          <Field
            name="year"
            label="YYYY"
            type="number"
            component={InputField}
            maxlength="4"
            validate={[required, date]}
          />
          <Field
            name="price"
            label="price"
            type="number"
            component={InputField}
            validate={[required]}
          />
        </div>
        <FieldArray name="libraryIds" component={IdField} />
        <button className="btn waves-effect waves-light red accent-1" disabled={invalid} type="submit" name="action">
                    Submit
          <i className="material-icons right">send</i>
        </button>
        <button className="btn waves-effect waves-light red accent-1" type="button" onClick={this.onCancel} name="action">
            Cancel
          <i className="material-icons right">cancel</i>
        </button>
      </form>
    );
  }
}
const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);

const mapStateToProps = (state) => ({
  error: selectError(state),
});
const mapDispatchToProps = (dispatch) => ({
  create: (data) => { dispatch(actionCreators.create(data)); },
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'createForm',
    enableReinitialize: true,
  }),
)(CreateBook);
