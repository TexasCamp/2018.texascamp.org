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
}) => {
  return (
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
    />
  );
};

export default compose(withSessionMutation, withTermData, withLogic)(
  SubmitSession,
);
