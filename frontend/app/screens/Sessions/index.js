// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import styles from 'Sessions/styles.css';
import withSessionQuery from 'Sessions/withSessionsQuery';
import type { SessionT, SkillLevelT, TrackT } from 'types';
import { cleanHtml, searchArr, titleToLink } from 'utils';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import withProps from 'recompose/withProps';
import Link from 'AsyncLink';

type SessionExtendedT = SessionT & {
  visibility: boolean,
};

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
          if (el.skillLevel === skillLevel) {
            return { ...el, visibility: true };
          }
          return { ...el, visibility: false };
        }),
      );
    },
    filterByTrack: ({ setSessions, sessions, setTrack }) => track => {
      setTrack(track);
      setSessions(
        sessions.map(el => {
          if (el.track === track) {
            return { ...el, visibility: true };
          }
          return { ...el, visibility: false };
        }),
      );
    },
    filterByText: ({ setSessions, sessions, setSearchText }) => ({
      target: { value },
    }) => {
      setSearchText(value);
      if (!value) {
        setSessions(sessions.map(el => ({ ...el, visibility: true })));
      }
      const sessionsFilteredBySearchResults = searchArr(
        value,
        sessions,
      ).map((isMatch, eachInd) => ({
        ...sessions[eachInd],
        visibility: isMatch,
      }));
      setSessions(sessionsFilteredBySearchResults);
    },
    resetAllFilters: ({
      sessions,
      setSessions,
      setSkillLevel,
      setTrack,
      setSearchText,
    }) => () => {
      setSessions(sessions.map(el => ({ ...el, visibility: true })));
      setSkillLevel(null);
      setTrack(null);
      setSearchText('');
    },
  }),
  withProps(() => ({
    tracks: [
      'Coding and Development',
      'Devops',
      'Frontend',
      'Horizons',
      'PHP',
      'Project Management',
      'Site Building',
      'UX and Content Strategy',
    ],
    skillLevels: ['Beginner', 'Intermediate', 'Advanced'],
  })),
  lifecycle({
    componentWillMount() {
      const { sessions, setSessions } = this.props;
      setSessions(sessions.map(el => ({ ...el, visibility: true })));
    },
  }),
);

type SessionsListProps = {
  sessions: Array<SessionExtendedT>,
  filterBySkillLevel: Function,
  resetAllFilters: Function,
  filterByText: Function,
  filterByTrack: Function,
  tracks: Array<TrackT>,
  skillLevels: Array<SkillLevelT>,
  textSearchInput: string,
};

const SessionsList = withLogic((props: SessionsListProps) => {
  const {
    sessions,
    filterBySkillLevel,
    skillLevels,
    tracks,
    filterByTrack,
    resetAllFilters,
    filterByText,
    textSearchInput,
  } = props;
  return (
    <div className={styles.sessionsContainer}>
      <h2>Skill Level Filters:</h2>
      {skillLevels.map(eachLevel =>
        (<button key={eachLevel} onClick={() => filterBySkillLevel(eachLevel)}>
          {`${eachLevel}`}
        </button>),
      )}
      <h2>Track Filters:</h2>
      {tracks.map(eachTrack =>
        (<button key={eachTrack} onClick={() => filterByTrack(eachTrack)}>
          {`${eachTrack}`}
        </button>),
      )}
      <div>
        <h2>Session Search</h2>
        <input type="text" value={textSearchInput} onChange={filterByText} />
      </div>
      <h2>Reset All:</h2>
      <button onClick={() => resetAllFilters()}>Reset All Filters</button>
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
                  <Link to={`sessions/${titleToLink(eachSession.title)}`}>
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
});

type SessionPageProps = {
  sessions: Array<SessionT>,
};
const SessionPage = ({ sessions }: SessionPageProps) =>
  (<div>
    <Helmet title="Sessions" />
    <Header heading="Sessions" />
    <SessionsList sessions={sessions} />
  </div>);

export default compose(withSessionQuery)(SessionPage);
