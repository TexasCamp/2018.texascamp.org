// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import type { SessionT } from 'types';
import styles from './styles.css';

const SessionIndividual = ({ session }: { session: SessionT }) => {
  // Format date/time
  const formattedTimeslotDay = session.timeslot
    ? session.timeslot.toLocaleString('en-US', { weekday: 'long' })
    : '';
  const formattedTimeslotDate = session.timeslot
    ? session.timeslot.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    : '';

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
                  <div className={styles.field}>
                    <div className={styles.fieldLabel}>
                      Presenter<span className={styles.lightText}>(s)</span>
                    </div>
                    <div>
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
                  </div>
                  <div className={styles.field}>
                    <div className={styles.fieldLabel}>Track</div>
                    <div>
                      {session.track}
                    </div>
                  </div>
                  <div className={styles.field}>
                    <div className={styles.fieldLabel}>Skill Level</div>
                    <div>
                      {session.skillLevel}
                    </div>
                  </div>
                  {session.timeslot &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Timeslot</div>
                      <div>
                        {formattedTimeslotDay}
                      </div>
                      <div>
                        {formattedTimeslotDate}
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
                  <div className={styles.bios}>
                    {session.speakers.map(eachSpeaker =>
                      (<div
                        className={styles.bio}
                        name={eachSpeaker.fieldSessionPresenter}
                      >
                        <div className={styles.bioNames}>
                          <div
                            key={eachSpeaker.fieldSessionPresenter}
                            className={styles.bioName}
                          >
                            {eachSpeaker.fieldSessionPresenter}
                          </div>
                        </div>
                        {cleanHtml(eachSpeaker.fieldSessionBio)}
                      </div>),
                    )}
                  </div>
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
