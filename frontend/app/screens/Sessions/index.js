// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import styles from 'Sessions/styles.css';
import withSessionQuery from 'Sessions/withSessionsQuery';
import type { SessionT } from 'types';
import { cleanHtml } from 'utils';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';

// filter by track, skill level, search

const withLogic = compose(
  withState('sessions', 'setSessions', ({ sessions }) => sessions), // beginner, intermediate, advanced
  withState('skillLevel', 'setSkillLevel', null), // beginner, intermediate, advanced
  withState('track', 'setTrack', null), // options are on the thing
  withState('textSearchInput', 'setSearchText', ''), // search
  withHandlers({
    filterBySkillLevel: ({
      setSessions,
      sessions,
      setSkillLevel,
    }) => skillLevel => {
      setSkillLevel(skillLevel);
      setSessions(
        sessions.map(el => {
          if (el.skillLevel === skillLevel || skillLevel === null) {
            return { ...el, visibility: true };
          }
          return { ...el, visibility: false };
        }),
      );
    },
  }),
  lifecycle({
    componentWillMount() {
      const { sessions, setSessions } = this.props;
      setSessions(sessions.map(el => ({ ...el, visibility: true })));
    },
  }),
);

type SessionsListProps = {
  sessions: Array<SessionT>,
  // filteredSkillLevel: string,
  filterBySkillLevel: Function,
  // filteredText: string,
  // filterByText: Function,
  // filteredTrack: string,
  // filterByTrack: Function,
};
const SessionsList = (props: SessionsListProps) => {
  const { sessions, filterBySkillLevel } = props;
  console.log(props);
  return (
    <div className={styles.sessionsContainer}>
      <button onClick={() => filterBySkillLevel('Beginner')}>
        {'Filter by Beginner'}
      </button>
      <button onClick={() => filterBySkillLevel('Intermediate')}>
        {'Filter by Intermediate'}
      </button>
      <button onClick={() => filterBySkillLevel('Advanced')}>
        {'Filter by Advanced'}
      </button>
      <button onClick={() => filterBySkillLevel(null)}>
        {'Remove filters'}
      </button>
      {sessions
        .filter(({ visibility }) => visibility === true)
        .map(eachSession =>
          (<div key={eachSession.title}>
            <ul>
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
                {`Title: ${eachSession.title}`}
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

type SessionPageProps = {
  sessions: Array<SessionT>,
  filteredSkillLevel: string,
  filterBySkillLevel: Function,
  filteredText: string,
  filterByText: Function,
  filteredTrack: string,
  filterByTrack: Function,
};
const SessionPage = ({ sessions, ...props }: SessionPageProps) =>
  (<div>
    <Helmet title="Sessions" />
    <Header heading="Sessions" />
    <SessionsList sessions={sessions} {...props} />
  </div>);

export default compose(withSessionQuery, withLogic)(SessionPage);
