import React, { PureComponent } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';


import { selectLibrary, selectStatus, selectError } from '../../../store/selectors/LibrarySelector';

import InputField from './InputField';
import { required } from './validation';
import IdField from './IdField';
import PropTypes from "prop-types";
import LibraryEffects from "../../../store/effects/LibraryEffects";
import LibraryAction from "../../../store/actions/LibraryAction";

class ModifyLibrary extends PureComponent {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        getOne: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired,
        create: PropTypes.func.isRequired,
    };
  componentDidMount() {
    this.props.getOne();
  }

  cancelHandler() {
    this.props.history.goBack();
  }

  onSubmit = (e)=> {
    const { match: { params } } = this.props;
    if (params._id) {
      this.props.update(e);
    } else {
      this.props.create(e);
    }
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
      <form className="col s12 input" onSubmit={handleSubmit(this.onSubmit)}>
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
                  name="about"
                  label="About"
                  type="text"
                  component={InputField}
                  validate={required}
              />
          </div>
        <FieldArray name="archive" component={IdField} />
        <button className="btn waves-effect waves-light red accent-1" type="button" onClick={this.cancelHandler.bind(this)} name="action">
              Cancel
          <i className="material-icons right">cancel</i>
        </button>
        <button className="btn waves-effect waves-light red accent-1" disabled={invalid} type="submit" name="action">
                    Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }
}
const libraryAction = new LibraryAction();
const libraryEffects = new LibraryEffects(libraryAction);

const mapStateToProps = (state, props) => {
  const { match: { params } } = props;
  if (params._id) {
    return {
      loading: selectStatus(state),
      error: selectError(state),
      initialValues: selectLibrary(state),
    };
  }
  return {
    loading: selectStatus(state),
    error: selectError(state),
  };
};
const mapDispatchToProps = (dispatch, props) => {
  const { match: { params } } = props;
  return {

    getOne: () => { dispatch(libraryEffects.getOne(params._id)); },
    update: (data) => {
      dispatch(libraryEffects.update(params._id, data));
    },
    create: (data) => { dispatch(libraryEffects.create(data)); },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'ModifyLibrary',
    enableReinitialize: true,
  }),
)(ModifyLibrary);
