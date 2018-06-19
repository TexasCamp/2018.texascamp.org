// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import { cleanHtml, formatTime, formatSessionDate } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import type { SessionT } from 'types';
import styles from './styles.css';

const SessionIndividual = ({ session }: { session: SessionT }) => {
  // Format date/time
  const formattedTimeslotDate = session.timeslot.start
    ? formatSessionDate(session.timeslot.start)
    : '';
  const formattedTimeslotTime = `${formatTime(
    session.timeslot.start,
  )}-${formatTime(session.timeslot.end)}`;

  // Format body to:
  // - Update inline image src to include full url
  let formattedBody = session.body;
  formattedBody = formattedBody
    ? formattedBody.replace(
        'src="/sites/default/files/inline-images/',
        'src="https://backend2018.texascamp.org/sites/default/files/inline-images/',
      )
    : '';
  return (
    <div>
      {session.title &&
        <div>
          <Helmet title={`Session: ${session.title}`} />
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
                  {session.timeslot &&
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
                  {cleanHtml(formattedBody)}
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

export default SessionIndividual;
