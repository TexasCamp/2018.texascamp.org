import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import compose from 'recompose/compose';

const withFormValues = withState(
  'formValues',
  'setFormValues',
  ({ speakerCount }) => {
    const initial = {
      title: '',
      track: '',
      skillLevel: '',
      desc: '',
      bio: '',
      name: '',
      email: '',
      company: '',
    };

    for (let i = 1; i <= speakerCount; i++) {
      initial[`speakerName${i}`] = '';
    }

    return initial;
  },
);

const withSetFormValues = withHandlers({
  setFormValue: props => (name, value) =>
    props.setFormValues({
      ...props.formValues,
      [name]: value,
    }),
});

const withSpeakerCount = withState('speakerCount', 'setSpeakerCount', 2);

const withSpeakerHandlers = withHandlers({
  addSpeaker: ({ speakerCount, setSpeakerCount, setFormValue }) => () => {
    setSpeakerCount(speakerCount + 1);
    setFormValue(`speakerName${speakerCount + 1}`, '');
  },
  removeSpeaker: ({ setSpeakerCount }) => () =>
    setSpeakerCount(n => (n - 1 < 1 ? 1 : n - 1)),
});

export default compose(
  withSpeakerCount,
  withFormValues,
  withSetFormValues,
  withSpeakerHandlers,
);
