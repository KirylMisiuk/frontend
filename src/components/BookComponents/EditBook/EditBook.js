import React, { PureComponent } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import BookActions from '../../../store/actions/BookActions';
import { selectBook, selectStatus, selectError } from '../../../store/selectors/BookSelectors';
import ActionCreators from '../../../store/effects/BookEffects';
import InputField from './InputField';
import { date, required } from './validation';

class EditBook extends PureComponent {
  componentDidMount() {
    this.props.getOne();
  }

  onSubmit(e) {
    this.props.update(e);
  }

  render() {
    const {
      handleSubmit, invalid, loading, error,
    } = this.props;

    if (error) {
      return (
        <p>
            Error:
          {' '}
          {error}
        </p>
      );
    }
    if (loading) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }
    return (
      <form className="col s12 input" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="row">
          <Field
            name="_id"
            label="id"
            component={InputField}
            validate={required}
          />
        </div>
        <div className="row">
          <Field
            name="name"
            label="Name"
            type="text"
            component={InputField}
            validate={required}
          />
        </div>
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
        </div>
        <div className="row">
          <Field
            name="title"
            label="title"
            type="text"
            component={InputField}
            validate={required}
          />
        </div>
        <div className="row">
          <Field
            name="year"
            label="Year"
            type="number"
            component={InputField}
            maxlength="4"
            validate={[required, date]}
          />
        </div>
        <div className="row">
          <Field
            name="price"
            label="price"
            type="number"
            component={InputField}
            validate={[required]}
          />
        </div>
        <button className="btn waves-effect waves-light red accent-1" disabled={invalid} type="submit" name="action">
              Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }
}
const bookActions = new BookActions();
const actionCreators = new ActionCreators(bookActions);

const mapStateToProps = (state) => ({
  loading: selectStatus(state),
  error: selectError(state),
  initialValues: selectBook(state),
});
const mapDispatchToProps = (dispatch, props) => {
  const { match: { params } } = props;
  return {
    getOne: () => { dispatch(actionCreators.getOne(params._id)); },
    update: (data) => {
      dispatch(actionCreators.update(params._id, data));
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'simpleForm',
    enableReinitialize: true,
  }),
)(EditBook);
