// @flow
import React from 'react';
import type { SessionT } from 'types';
import SessionTeaser from 'SessionTeaser';
import styles from 'Sessions/styles.css';
import withLogic from './logic';

type ButtonT = {
  onClick: Function,
  isSelected: boolean,
  name: string,
};

type SessionsListProps = {
  sessions: Array<SessionT>,
  resetAllFilters: Function,
  changeTextFilter: Function,
  textSearchInput: string,
  trackButtons: Array<ButtonT>,
  skillLevelButtons: Array<ButtonT>,
};

const SessionsList = (props: SessionsListProps) => {
  const {
    sessions,
    resetAllFilters,
    changeTextFilter,
    textSearchInput,
    trackButtons,
    skillLevelButtons,
  } = props;

  return (
    <div className={styles.sessionsContainer}>
      <div className={styles.detail}>
        <h1>Sessions</h1>
        <h2>Skill Level Filters:</h2>
        {skillLevelButtons.map(eachBtn =>
          (<button
            className={eachBtn.isSelected && styles.btnSelected}
            key={eachBtn.name}
            onClick={eachBtn.onClick}
          >
            {`${eachBtn.name}`}
          </button>),
        )}
        <h2>Track Filters:</h2>
        {trackButtons.map(eachBtn =>
          (<button
            className={eachBtn.isSelected && styles.btnSelected}
            key={eachBtn.name}
            onClick={eachBtn.onClick}
          >
            {`${eachBtn.name}`}
          </button>),
        )}
        <div>
          <h2>Session Search</h2>
          <input
            type="text"
            value={textSearchInput}
            onChange={changeTextFilter}
          />
        </div>
        <h2>Reset All:</h2>
        <button onClick={resetAllFilters}>Reset All Filters</button>
        {sessions.map(sessionTeaser =>
          (<SessionTeaser
            key={sessionTeaser.title}
            sessionTeaser={sessionTeaser}
          />),
        )}
      </div>
    </div>
  );
};
export default withLogic(SessionsList);
