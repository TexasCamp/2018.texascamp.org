import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import compose from 'recompose/compose';

const withFormValues = withState('formValues', 'setFormValues', {});

const withSetFormValues = withHandlers({
  setFormValue: props => (name, value) =>
    props.setFormValues({
      ...props.formValues,
      [name]: value,
    }),
});

export default compose(withFormValues, withSetFormValues);
