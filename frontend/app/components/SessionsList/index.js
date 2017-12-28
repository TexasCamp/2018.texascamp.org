// @flow
import React from 'react';
import { cleanHtml } from 'utils';
import type { SessionT } from 'types';
import styles from 'Sessions/styles.css';
import Link from 'AsyncLink';
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
      <hr />
      {sessions.map(eachSession =>
        (<div key={eachSession.title}>
          <ul>
            <li>
              {`Title: ${eachSession.title}`}
            </li>
            <li>
              <u>
                <Link to={`/sessions/${eachSession.urlString}`}>
                  Link to session page
                </Link>
              </u>
            </li>
            <li className={styles.descriptionContainer}>
              {'Description:'}
              {cleanHtml(eachSession.body)}
            </li>
            <li>
              {`Experience Level: ${eachSession.skillLevel}`}
            </li>
            <li>
              <span>Speakers:</span>
              {eachSession.speakers.map(eachName =>
                (<span key={eachName}>
                  {` ${eachName} `}
                </span>),
              )}
            </li>
            <li>
              {`Timeslot: ${eachSession.timeslot}`}
            </li>
            <li>
              {`Track: ${eachSession.track}`}
            </li>
          </ul>
          <hr />
        </div>),
      )}
    </div>
  );
};
export default withLogic(SessionsList);
