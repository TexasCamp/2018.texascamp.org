import React from 'react';
import SessionForm from 'SubmitSession/form';
import withTermData from 'SubmitSession/withTermData';
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
    />
  );
};

export default compose(withTermData, withLogic)(SubmitSession);
