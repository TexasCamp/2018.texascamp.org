// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import styles from 'Sessions/styles.css';
import withSessionQuery from 'Sessions/withSessionsQuery';
import type { SessionT } from 'types';
import { cleanHtml } from 'utils';

type SessionsListProps = {
  sessions: Array<SessionT>,
};
const SessionsList = ({ sessions }: SessionsListProps) =>
  (<div className={styles.sessionsContainer}>
    {sessions.map(eachSession =>
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
  </div>);

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
