import React from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'next/router';
import { Link } from 'react-scroll';
import { withApollo } from '../../../shared/lib/withApollo';
import withSessions from '../../../shared/query/withSessions';
import HeadTitle from '../../../components/HeadTitle';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import NotFound from '../../../components/NotFound';
import { cleanHtml, formatTime, formatSessionDate } from '../../../shared/utils';
import styles from './styles.css';

const SessionPage = ({ session }) => {
  // Format date/time
  const formattedTimeslotDate = session.timeslot.start
    ? formatSessionDate(session.timeslot.start)
    : '';
  const formattedTimeslotTime = session.timeslot.start
    ? `${formatTime(
    session.timeslot.start,
  )}-${formatTime(session.timeslot.end)}`
    : '';

  return (
    <div>
      {session.title &&
        <div>
          <HeadTitle title={`Session: ${session.title}`} />
          <Menu />
          <div className={styles.contentWrapper}>
            <Header />
            <div className={styles.content}>
              <h1 className={styles.title}>
                {session.title}
              </h1>
              <div className={styles.detail}>
                <div className={styles.section}>
                  {session.speakers[0].fieldSessionPresenter &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>
                        Presenter<span className={styles.lightText}>(s)</span>
                      </div>
                      <div className={styles.presenter}>
                        {session.speakers.map(eachSpeaker =>
                          (<div key={eachSpeaker.fieldSessionPresenter}>
                            <Link
                              activeClass="active"
                              to={eachSpeaker.fieldSessionPresenter}
                              spy
                              smooth
                              offset={50}
                              duration={500}
                            >
                              {eachSpeaker.fieldSessionPresenter}
                            </Link>
                          </div>),
                        )}
                      </div>
                    </div>}
                  {session.track &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Track</div>
                      <div>
                        {session.track}
                      </div>
                    </div>}
                  {session.skillLevel &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Skill Level</div>
                      <div>
                        {session.skillLevel}
                      </div>
                    </div>}
                  {session.timeslot.start &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Timeslot</div>
                      <div>
                        {formattedTimeslotDate}
                      </div>
                      <div>
                        {formattedTimeslotTime}
                      </div>
                    </div>}
                  {session.room &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Room</div>
                      <div>
                        {session.room}
                      </div>
                    </div>}
                </div>
                <div className={styles.mainContent}>
                  {cleanHtml(session.body)}
                  {session.youtubeLink &&
                    <div className={styles.videoWrapper}>
                      <iframe
                        className={styles.video}
                        width="560"
                        height="315"
                        src={session.youtubeLink}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={session.title}
                      />
                    </div>}
                  {session.speakers[0].fieldSessionPresenter &&
                    <div className={styles.bios}>
                      {session.speakers.map(eachSpeaker =>
                        (<div
                          className={styles.bio}
                          name={eachSpeaker.fieldSessionPresenter}
                          key={eachSpeaker.fieldSessionPresenter}
                        >
                          <div className={styles.bioNames}>
                            <div className={styles.bioName}>
                              {eachSpeaker.fieldSessionPresenter}
                            </div>
                          </div>
                          {cleanHtml(eachSpeaker.fieldSessionBio)}
                        </div>),
                      )}
                    </div>}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>}
    </div>
  );
};

const SessionLoader = ({ router, loading, sessions }) => {
  if (!loading) {
    const { query: { sessionName } } = router;

    const sessionItem = sessions.find(
      ({ urlString }) => urlString === sessionName,
    );

    if (sessionItem) {
      return <SessionPage session={sessionItem} />;
    } else {
      return <NotFound msg="No session matches that URL" linkText="Back to schedule" linkUrl="/schedule" />;
    }
  }

  return null;
}

export default compose(withApollo({ ssr: true }), withSessions, withRouter)(SessionLoader);
