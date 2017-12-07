// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import type { SessionT } from 'types';
import styles from 'Sessions/styles.css';
import withSessionQuery from './withSessionsQuery';

type SessionsListProps = {
  sessions: Array<SessionT>,
};
const SessionsList = ({ sessions }: SessionsListProps) => (
  <div className={styles.sessionsContainer}>
    {sessions.map(eachSession =>
        (<ul>
          <li>
            {`Description: ${eachSession.body}`}
          </li>
          <li>
            {`Experience Level: ${eachSession.skillLevel}`}
          </li>
          <li>
            {eachSession.speakers.map(eachName =>
              (<div>
                {eachName}
              </div>),
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
        </ul>),
      )}
    <ul className={styles.session}>
      {'hello'}
    </ul>
  </div>
  );

type SessionPageProps = {
  sessions: Array<SessionT>,
};
const SessionPage = ({ sessions }: SessionPageProps) =>
  (<div>
    <Helmet title="Sessions" />
    <Header heading="Sessions" />
    <SessionsList sessions={sessions} />
  </div>);

export default withSessionQuery(SessionPage);
