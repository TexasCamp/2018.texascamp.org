// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import SessionForm from 'SubmitSession/form';
import withTermData from 'SubmitSession/withTermData';
import withSessionMutation from 'SubmitSession/withSessionMutation';
import withLogic from 'SubmitSession/logic';
import compose from 'recompose/compose';
import styles from './styles.css';

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
      <Helmet title="Submit a Session" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <h1>Submit a session</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent
              venenatis est viverra, tincidunt nibh non, mollis ex. Nulla sit me
              dui eu ipsum aliquet varius id quis felis. Aliquam placerat nunc
              id dolor bibendum lobortis. Praesent laoreet cursus lorem ales.
              Proin est ispsum aliquam vel viverra velit.{' '}
            </p>
            <h3>Session</h3>
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default compose(withSessionMutation, withTermData, withLogic)(
  SubmitSession,
);
