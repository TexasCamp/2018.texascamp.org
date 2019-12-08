
import React from 'react';
import compose from 'recompose/compose';
import moment from 'moment';
import Link from 'next/link';
import { withApollo } from '../../shared/lib/withApollo';
import HeadTitle from '../../components/HeadTitle';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import withSessions from '../../shared/query/withSessions';
import withHappenings from '../../shared/query/withHappenings';
import withLogic from './logic';
import styles from './styles.css';

const Schedule = ({
  sessions,
  setDateFilter,
  defaultDate,
}) => {
  return (
    <div>
      <HeadTitle title="Sessions" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header image="horse" />
        <div className={styles.content}>
          <div className={styles.sessionsContainer}>
            <div className={styles.detail}>
              <h1 className={styles.title}>Schedule</h1>
              <div className={styles.filters}>
                <div className={styles.dayFilters}>
                  <button
                    onClick={() => setDateFilter(moment.utc('2018-05-31'))}
                    className={`${styles.button} ${moment
                      .utc(defaultDate)
                      .isSame(moment.utc('2018-05-31'), 'day')
                      ? styles.selected
                      : ''}`}
                  >
                    Thursday
                  </button>
                  <button
                    onClick={() => setDateFilter(moment.utc('2018-06-01'))}
                    className={`${styles.button} ${moment
                      .utc(defaultDate)
                      .isSame(moment.utc('2018-06-01'), 'day')
                      ? styles.selected
                      : ''}`}
                  >
                    Friday
                  </button>
                  <button
                    onClick={() => setDateFilter(moment.utc('2018-06-02'))}
                    className={`${styles.button} ${moment
                      .utc(defaultDate)
                      .isSame(moment.utc('2018-06-02'), 'day')
                      ? styles.selected
                      : ''}`}
                  >
                    Saturday
                  </button>
                </div>
                <div className={styles.skillLevelKey}>
                  <div className={styles.skillLevel}>
                    <div className={styles.beginner}>Beginner</div>
                    <div className={styles.intermediate}>Intermediate</div>
                    <div className={styles.advanced}>Advanced</div>
                  </div>
                </div>
              </div>
              {sessions.map(sessionTimeslotGroup => {
                return (
                  <div key={sessionTimeslotGroup[0]}>
                    <h2 className={styles.timeslot}>
                      {sessionTimeslotGroup[0]}
                    </h2>
                    <div className={styles.timeslotSessions}>
                      {sessionTimeslotGroup[1].map(session => {
                        const baseHref = session.type === 'happening'
                          ? '/happenings/'
                          : '/sessions/';
                        const page = session.type === 'happening'
                          ? '/happenings/[happeningName]'
                          : '/sessions/[sessionName]';

                        return (
                          <div key={session.urlString} className={styles.session}>
                            {session.body !== null
                              ? <Link
                                href={page}
                                as={`${baseHref}${session.urlString}`}
                              >
                                <a><SessionDetails session={session} /></a>
                              </Link>
                              : <SessionDetails session={session} />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};


const SessionDetails = ({ session }) => {
  return (
    <div className={styles.sessionWrapper}>
      <div className={styles.sessionDetails}>
        {session.skillLevel &&
          <div className={styles.skillLevel}>
            <div className={session.skillLevel}>
              {session.skillLevel}
            </div>
          </div>}
        <h3 className={styles.sessionTitle}>
          {session.title}
        </h3>
        {session.speakers &&
          <div className={styles.speakers}>
            {session.speakers.map(eachSpeaker =>
              (<span
                key={eachSpeaker.fieldSessionPresenter}
                className={styles.presenter}
              >
                {eachSpeaker.fieldSessionPresenter}
              </span>),
            )}
            {session.track &&
              session.track !== 'Keynote' &&
              <span>
                <span className={styles.spacer}>|</span> {session.track}
              </span>}
          </div>}
      </div>
      {session.room &&
        <div className={styles.room}>
          {session.room}
        </div>}
    </div>
  );
};

export default compose(withApollo, withSessions, withHappenings, withLogic)(Schedule);
