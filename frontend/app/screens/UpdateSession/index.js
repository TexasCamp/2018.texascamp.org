// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import SessionForm from 'UpdateSession/form';
import withTermData from 'UpdateSession/withTermData';
import withSessionData from 'UpdateSession/withSessionData';
import withSessionMutation from 'UpdateSession/withSessionMutation';
import withLogic from 'UpdateSession/logic';
import compose from 'recompose/compose';
import styles from './styles.css';

const UpdateSession = ({
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
  fetchingSession,
  session,
  id,
}) => {
  return (
    <div>
      <Helmet title="Update Session" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>Update session</h1>
            {fetchingSession && <div>Loading your session data...</div>}
            {!fetchingSession &&
              !session &&
              <div>
                Unable to find session id {id}.
              </div>}
            {!fetchingSession &&
              session &&
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
            {submitted &&
              <p className={styles.confirmationText}>
                Your session has been updated!
              </p>}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default compose(
  withSessionMutation,
  withSessionData,
  withTermData,
  withLogic,
)(UpdateSession);
