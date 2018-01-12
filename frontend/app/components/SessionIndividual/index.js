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
                      {session.speakers.map(eachName =>
                        (<div key={eachName}>
                          <Link
                            activeClass="active"
                            to="bio"
                            spy
                            smooth
                            offset={50}
                            duration={500}
                          >
                            {eachName}
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

                  {session.speakersBio &&
                    <div className={styles.bio} name="bio">
                      <div className={styles.bioNames}>
                        {session.speakers.map(eachName =>
                          (<div key={eachName} className={styles.bioName}>
                            {eachName}
                          </div>),
                        )}
                      </div>
                      {cleanHtml(session.speakersBio)}
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
