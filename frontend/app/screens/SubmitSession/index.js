import React from 'react';
import SessionForm from 'SubmitSession/form';
import withTermData from 'SubmitSession/withTermData';

const SubmitSession = ({ tracks, skillLevels }) => {
  return <SessionForm tracks={tracks} skillLevels={skillLevels} />;
};

export default withTermData(SubmitSession);
