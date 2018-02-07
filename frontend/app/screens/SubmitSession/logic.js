import React from 'react';
import Html from 'Html';
import withHandlers from 'recompose/withHandlers';
import withStateHandlers from 'recompose/withStateHandlers';
import compose from 'recompose/compose';

const getInitialFormValues = speakerCount => {
  const initialFormValues = {
    title: '',
    track: '',
    skillLevel: '',
    desc: '',
    name: '',
    email: '',
    company: '',
  };

  for (let i = 1; i <= speakerCount; i++) {
    initialFormValues[`speakerName${i}`] = '';
    initialFormValues[`speakerBio${i}`] = '';
  }

  return initialFormValues;
};

const withFormState = withStateHandlers(
  ({ speakerCount = 1 }) => {
    const initialFormValues = getInitialFormValues(speakerCount);

    return {
      speakerCount,
      formValues: initialFormValues,
      saving: false,
      error: '',
      submitted: false,
    };
  },
  {
    setFormValue: ({ formValues }) => (name, value) => ({
      formValues: {
        ...formValues,
        [name]: value,
      },
    }),
    setSaving: () => saving => ({ saving }),
    setError: () => error => ({ error }),
    addSpeaker: ({ speakerCount, formValues }) => () => ({
      speakerCount: speakerCount + 1,
      formValues: {
        ...formValues,
        [`speakerName${speakerCount + 1}`]: '',
        [`speakerBio${speakerCount + 1}`]: '',
      },
    }),
    removeSpeaker: ({ speakerCount }) => () => ({
      speakerCount: speakerCount - 1 < 1 ? 1 : speakerCount - 1,
    }),
    setSubmitting: () => () => {
      return {
        saving: true,
        error: '',
        submitted: false,
      };
    },
    setSubmitted: () => () => {
      return {
        saving: false,
        error: '',
        submitted: true,
      };
    },
    setSubmissionFailed: () => error => {
      return {
        saving: false,
        error,
        submitted: false,
      };
    },
    resetForm: () => () => {
      const intialForm = getInitialFormValues(2);
      return {
        speakerCount: 2,
        formValues: intialForm,
        saving: false,
        error: '',
        submitted: false,
      };
    },
  },
);

const withSubmitForm = withHandlers({
  onSubmit: ({
    speakerCount,
    formValues,
    setSubmitting,
    setSubmitted,
    setSubmissionFailed,
    createSession,
  }) => e => {
    e.preventDefault();
    setSubmitting();

    const speakers = Array(speakerCount).fill(0).map((val, index) => ({
      name: formValues[`speakerName${index + 1}`],
      bio: formValues[`speakerBio${index + 1}`] || '',
    }));

    createSession(
      formValues.title,
      formValues.skillLevel,
      formValues.track,
      speakers,
      formValues.desc,
      formValues.name,
      formValues.email,
      formValues.company,
    )
      .then(({ data: { CreateSession: { errors, violations } } }) => {
        let errorMessages = [];

        if (errors.length) {
          errorMessages = errors.map(msg =>
            (<Html>
              {msg}
            </Html>),
          );
        }

        if (violations.length) {
          errorMessages = violations.map(violation =>
            (<Html>
              {violation.message}
            </Html>),
          );
        }

        if (errorMessages.length) {
          setSubmissionFailed(errorMessages);
          return;
        }

        setSubmitted();
      })
      .catch(err => {
        console.log(err);
        setSubmissionFailed(
          'There was an error submitting your session. Please try again.',
        );
      });
  },
});

export default compose(withFormState, withSubmitForm);
