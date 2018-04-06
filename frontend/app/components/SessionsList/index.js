// @flow
import React from 'react';
import type { SessionT } from 'types';
import Link from 'AsyncLink';
import { cleanHtml } from 'utils';
import styles from './styles.css';
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
  openFilters: Function,
  filtersOpen: boolean,
};

const SessionsList = (props: SessionsListProps) => {
  const {
    sessions,
    resetAllFilters,
    changeTextFilter,
    textSearchInput,
    trackButtons,
    skillLevelButtons,
    openFilters,
    filtersOpen,
  } = props;

  return (
    <div className={styles.sessionsContainer}>
      <div className={styles.detail}>
        <h1 className={styles.title}>Sessions</h1>
        <button
          onClick={openFilters}
          className={`${styles.openFiltersButton} ${filtersOpen
            ? styles.filtersOpen
            : ''}`}
        >
          Open Filters
        </button>
        <button className={styles.filterTitle} onClick={openFilters}>
          Filter By
        </button>
        <div className={styles.filterWrapper}>
          <div
            className={`${styles.filters} ${filtersOpen
              ? styles.filtersOpen
              : styles.filtersClosed}`}
          >
            <div id="search" className={styles.searchLabel}>
              Search
            </div>
            <input
              aria-labelledby="search"
              className={styles.searchTextInput}
              type="text"
              value={textSearchInput}
              onChange={changeTextFilter}
              placeholder="Search"
            />
            <div className={styles.filter}>
              <div className={styles.fieldLabel}>Track</div>
              {trackButtons.map(eachBtn =>
                (<button
                  className={`${styles.filterButton} ${eachBtn.isSelected &&
                    styles.filterButtonSelected}`}
                  key={eachBtn.name}
                  onClick={eachBtn.onClick}
                  tabIndex="0"
                >
                  {`${eachBtn.name}`}
                </button>),
              )}
            </div>
            <div className={styles.filter}>
              <div className={styles.fieldLabel}>Skill Level</div>
              {skillLevelButtons.map(eachBtn =>
                (<button
                  className={`${styles.filterButton} ${eachBtn.isSelected &&
                    styles.filterButtonSelected}`}
                  key={eachBtn.name}
                  onClick={eachBtn.onClick}
                  tabIndex="0"
                >
                  {`${eachBtn.name}`}
                </button>),
              )}
            </div>
            <button
              className={styles.resetButton}
              onClick={resetAllFilters}
              tabIndex="0"
            >
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
            <div key={sessionTeaser.title} className={styles.teaserWrapper}>
              <Link to={`/sessions/${sessionTeaser.urlString}`}>
                <h2>
                  {sessionTeaser.title}
                </h2>
                <p className={styles.body}>
                  {cleanHtml(formattedBody)}
                </p>
                <div className={styles.details}>
                  {sessionTeaser.speakers &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>
                        Presenter<span className={styles.lightText}>(s)</span>
                      </div>
                      <div>
                        {sessionTeaser.speakers.map(eachSpeaker =>
                          (<span
                            className={styles.presenter}
                            key={eachSpeaker.fieldSessionPresenter}
                          >
                            {eachSpeaker.fieldSessionPresenter}
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
        {sessions.length === 0 &&
          <div className={styles.teaserWrapper}>
            <h2>No sessions submitted.</h2>
            <p className={styles.body}>
              <Link to="/submit-session" className={styles.button}>
                Submit Session
              </Link>
            </p>
          </div>}
      </div>
    </div>
  );
};
export default withLogic(SessionsList);
