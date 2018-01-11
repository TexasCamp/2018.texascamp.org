import React from 'react';
import Html from 'Html';
import withHandlers from 'recompose/withHandlers';
import withStateHandlers from 'recompose/withStateHandlers';
import compose from 'recompose/compose';

const withFormState = withStateHandlers(
  ({ speakerCount = 2 }) => {
    const initialFormValues = {
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
      initialFormValues[`speakerName${i}`] = '';
    }

    return {
      speakerCount,
      formValues: initialFormValues,
      saving: false,
      error: '',
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
      },
    }),
    removeSpeaker: ({ speakerCount }) => () => ({
      speakerCount: speakerCount - 1 < 1 ? 1 : speakerCount - 1,
    }),
    setSubmitting: () => () => {
      return {
        saving: true,
        error: '',
      };
    },
    setSubmitted: () => () => {
      return {
        saving: false,
        error: '',
      };
    },
    setSubmissionFailed: () => error => {
      return {
        saving: false,
        error,
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
    }));

    createSession(
      formValues.title,
      formValues.skillLevel,
      formValues.track,
      speakers,
      formValues.desc,
      formValues.bio,
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
