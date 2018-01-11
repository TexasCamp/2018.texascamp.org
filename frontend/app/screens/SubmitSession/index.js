import React from 'react';
import SessionForm from 'SubmitSession/form';
import withTermData from 'SubmitSession/withTermData';
import withLogic from 'SubmitSession/logic';
import compose from 'recompose/compose';

const SubmitSession = ({ tracks, skillLevels, formValues, setFormValue }) => {
  return (
    <SessionForm
      tracks={tracks}
      skillLevels={skillLevels}
      formValues={formValues}
      setFormValue={setFormValue}
    />
  );
};

export default compose(withTermData, withLogic)(SubmitSession);
