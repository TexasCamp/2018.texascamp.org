import React from 'react';
import SessionForm from 'SubmitSession/form';
import withTermData from 'SubmitSession/withTermData';
import withSessionMutation from 'SubmitSession/withSessionMutation';
import withLogic from 'SubmitSession/logic';
import compose from 'recompose/compose';

const SubmitSession = ({
  tracks,
  skillLevels,
  formValues,
  setFormValue,
  speakerCount,
  addSpeaker,
  removeSpeaker,
  saving,
  error,
  onSubmit,
  submitted,
  resetForm,
}) => {
  return (
    <div>
      <h1>Submit a session</h1>
      {submitted &&
        <div>
          Your session has been submitted! You&apos;ll receive an email
          confirmation and edit permalink.<button
            type="button"
            onClick={resetForm}
          >
            Submit another session
          </button>
        </div>}
      {!submitted &&
        <SessionForm
          tracks={tracks}
          skillLevels={skillLevels}
          formValues={formValues}
          setFormValue={setFormValue}
          speakerCount={speakerCount}
          addSpeaker={addSpeaker}
          removeSpeaker={removeSpeaker}
          saving={saving}
          error={error}
          onSubmit={onSubmit}
        />}
    </div>
  );
};

export default compose(withSessionMutation, withTermData, withLogic)(
  SubmitSession,
);
