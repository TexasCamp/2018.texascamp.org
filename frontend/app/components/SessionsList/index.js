// @flow
import React from 'react';
import type { SessionT } from 'types';
import Link from 'AsyncLink';
import Html from 'Html';
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
        <h1 className={styles.title}>Sessions</h1>
        <h4 className={styles.filterTitle}>Filter By</h4>
        <div className={styles.filterWrapper}>
          <div className={styles.filters}>
            <h4 className={styles.searchLabel}>Search</h4>
            <input
              className={styles.searchTextInput}
              type="text"
              value={textSearchInput}
              onChange={changeTextFilter}
              placeholder="Search"
            />
            <div className={styles.filter}>
              <h4>Track</h4>
              {trackButtons.map(eachBtn =>
                (<button
                  className={`${styles.filterButton} ${eachBtn.isSelected &&
                    styles.filterButtonSelected}`}
                  key={eachBtn.name}
                  onClick={eachBtn.onClick}
                >
                  {`${eachBtn.name}`}
                </button>),
              )}
            </div>
            <div className={styles.filter}>
              <h4>Skill Level</h4>
              {skillLevelButtons.map(eachBtn =>
                (<button
                  className={`${styles.filterButton} ${eachBtn.isSelected &&
                    styles.filterButtonSelected}`}
                  key={eachBtn.name}
                  onClick={eachBtn.onClick}
                >
                  {`${eachBtn.name}`}
                </button>),
              )}
            </div>
            <button onClick={resetAllFilters} className={styles.resetButton}>
              Reset All
            </button>
          </div>
        </div>
        {sessions.map(sessionTeaser => {
          // Use body summary if available
          // If not trim to 400 characters
          const strippedBody = sessionTeaser.body.replace(/(<([^>]+)>)/gi, '');
          const trimmedBody =
            strippedBody.length > 400
              ? `${strippedBody.substr(0, 400)}...`
              : strippedBody;
          const formattedBody = sessionTeaser.summary
            ? sessionTeaser.summary
            : trimmedBody;

          return (
            <div className={styles.teaserWrapper}>
              <Link to={`/sessions/${sessionTeaser.urlString}`}>
                <h3>
                  {sessionTeaser.title}
                </h3>
                <p>
                  <Html className={styles.body}>
                    {formattedBody}
                  </Html>
                </p>
                <div className={styles.details}>
                  {sessionTeaser.speakers &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>
                        Presenter<span className={styles.lightText}>(s)</span>
                      </div>
                      <div>
                        {sessionTeaser.speakers.map(eachName =>
                          (<span key={eachName}>
                            {eachName}
                          </span>),
                        )}
                      </div>
                    </div>}
                  {sessionTeaser.track &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Track</div>
                      <div>
                        {sessionTeaser.track}
                      </div>
                    </div>}
                  {sessionTeaser.skillLevel &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Skill Level</div>
                      <div>
                        {sessionTeaser.skillLevel}
                      </div>
                    </div>}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default withLogic(SessionsList);
