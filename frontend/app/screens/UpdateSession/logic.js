import React from 'react';
import Html from 'Html';
import withHandlers from 'recompose/withHandlers';
import withStateHandlers from 'recompose/withStateHandlers';
import withProps from 'recompose/withProps';
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

const getSessionFormValues = session => {
  const initialFormValues = {
    title: session.title,
    track: parseInt(session.fieldSessionTrack.entity.entityId, 10),
    skillLevel: parseInt(session.fieldSessionSkillLevel.entity.entityId, 10),
    desc: session.body.value,
    name: session.fieldSessionContactName,
    email: session.fieldSessionContactEmail,
    company: session.fieldSessionContactCompany || '',
  };

  for (let i = 1; i <= session.fieldSessionPresenters.length; i++) {
    initialFormValues[`speakerName${i}`] =
      session.fieldSessionPresenters[i - 1].entity.fieldSessionPresenter;
    initialFormValues[`speakerBio${i}`] =
      session.fieldSessionPresenters[i - 1].entity.fieldSessionBio.value;
  }

  return initialFormValues;
};

const withFormState = withStateHandlers(
  ({ speakerCount, fetchingSession, session }) => {
    let totalSpeakers = speakerCount || 1;
    let initialFormValues = getInitialFormValues(totalSpeakers);

    if (!fetchingSession && session) {
      initialFormValues = getSessionFormValues(session);
      totalSpeakers = session.fieldSessionPresenters.length;
    }

    return {
      speakerCount: totalSpeakers,
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
  },
);

const withSubmitForm = withHandlers({
  onSubmit: ({
    speakerCount,
    id,
    editToken,
    formValues,
    setSubmitting,
    setSubmitted,
    setSubmissionFailed,
    updateSession,
  }) => e => {
    e.preventDefault();
    setSubmitting();

    const speakers = Array(speakerCount).fill(0).map((val, index) => ({
      name: formValues[`speakerName${index + 1}`],
      bio: formValues[`speakerBio${index + 1}`] || '',
    }));

    updateSession(
      id,
      editToken,
      formValues.title,
      formValues.skillLevel,
      formValues.track,
      speakers,
      formValues.desc,
      formValues.name,
      formValues.email,
      formValues.company,
    )
      .then(({ data: { UpdateSession: { errors, violations } } }) => {
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
          'There was an error updating your session. Please try again.',
        );
      });
  },
});

const withSessionData = withProps(({ match }) => ({
  id: parseInt(match.params.id, 10),
  editToken: match.params.editToken,
}));

export default compose(withSessionData, withFormState, withSubmitForm);
