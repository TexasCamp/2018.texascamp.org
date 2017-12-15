// @flow
import React from 'react';
import { cleanHtml } from 'utils';
import type { SessionT, SkillLevelT, TrackT } from 'types';
import styles from 'Sessions/styles.css';
import Link from 'AsyncLink';
import withLogic from './logic';

type SessionExtendedT = SessionT & {
  visibility: boolean,
};

type SessionsListProps = {
  sessions: Array<SessionExtendedT>,
  filterBySkillLevel: Function,
  resetAllFilters: Function,
  filterByText: Function,
  filterByTrack: Function,
  tracks: Array<TrackT>,
  skillLevels: Array<SkillLevelT>,
  textSearchInput: string,
  skillLevelSelected: SkillLevelT,
  trackSelected: TrackT,
};

const SessionsList = (props: SessionsListProps) => {
  const {
    sessions,
    filterBySkillLevel,
    skillLevels,
    tracks,
    filterByTrack,
    resetAllFilters,
    filterByText,
    textSearchInput,
    skillLevelSelected,
    trackSelected,
  } = props;
  return (
    <div className={styles.sessionsContainer}>
      <h2>Skill Level Filters:</h2>
      {skillLevels.map(eachLevel =>
        (<button
          className={eachLevel === skillLevelSelected && styles.btnSelected}
          key={eachLevel}
          onClick={() => filterBySkillLevel(eachLevel)}
        >
          {`${eachLevel}`}
        </button>),
      )}
      <h2>Track Filters:</h2>
      {tracks.map(eachTrack =>
        (<button
          className={eachTrack === trackSelected && styles.btnSelected}
          key={eachTrack}
          onClick={() => filterByTrack(eachTrack)}
        >
          {`${eachTrack}`}
        </button>),
      )}
      <div>
        <h2>Session Search</h2>
        <input type="text" value={textSearchInput} onChange={filterByText} />
      </div>
      <h2>Reset All:</h2>
      <button onClick={resetAllFilters}>Reset All Filters</button>
      <hr />
      {sessions
        .filter(({ visibility }) => visibility === true)
        .map(eachSession =>
          (<div key={eachSession.title}>
            <ul>
              <li>
                {`Title: ${eachSession.title}`}
              </li>
              <li>
                <u>
                  <Link to={`sessions/${eachSession.urlString}`}>
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
