import React from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'next/router';
import { Link } from 'react-scroll';
import { withApollo } from '../../../shared/lib/withApollo';
import withHappenings from '../../../shared/query/withHappenings';
import HeadTitle from '../../../components/HeadTitle';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import NotFound from '../../../components/NotFound';
import { cleanHtml, formatTime, formatSessionDate } from '../../../shared/utils';
import styles from './styles.css';

const HappeningPage = ({ happening }) => {
  // Format date/time
  const formattedTimeslotDate = happening.timeslot.start
    ? formatSessionDate(happening.timeslot.start)
    : '';
  const formattedTimeslotTime = happening.timeslot.start
    ? `${formatTime(
      happening.timeslot.start,
  )}-${formatTime(happening.timeslot.end)}`
    : '';

  return (
    <div>
      {happening.title &&
        <div>
          <HeadTitle title={`Session: ${happening.title}`} />
          <Menu />
          <div className={styles.contentWrapper}>
            <Header />
            <div className={styles.content}>
              <h1 className={styles.title}>
                {happening.title}
              </h1>
              <div className={styles.detail}>
                <div className={styles.section}>
                  {happening.speakers[0].fieldSessionPresenter &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>
                        Presenter<span className={styles.lightText}>(s)</span>
                      </div>
                      <div className={styles.presenter}>
                        {happening.speakers.map(eachSpeaker =>
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
                  {happening.track &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Track</div>
                      <div>
                        {happening.track}
                      </div>
                    </div>}
                  {happening.skillLevel &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Skill Level</div>
                      <div>
                        {happening.skillLevel}
                      </div>
                    </div>}
                  {happening.timeslot.start &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Timeslot</div>
                      <div>
                        {formattedTimeslotDate}
                      </div>
                      <div>
                        {formattedTimeslotTime}
                      </div>
                    </div>}
                  {happening.room &&
                    <div className={styles.field}>
                      <div className={styles.fieldLabel}>Room</div>
                      <div>
                        {happening.room}
                      </div>
                    </div>}
                </div>
                <div className={styles.mainContent}>
                  {cleanHtml(happening.body)}
                  {happening.youtubeLink &&
                    <div className={styles.videoWrapper}>
                      <iframe
                        className={styles.video}
                        width="560"
                        height="315"
                        src={happening.youtubeLink}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={happening.title}
                      />
                    </div>}
                  {happening.speakers[0].fieldSessionPresenter &&
                    <div className={styles.bios}>
                      {happening.speakers.map(eachSpeaker =>
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

const HappeningLoader = ({ router, loading, happenings }) => {
  if (!loading) {
    const { query: { happeningName } } = router;

    const happeningItem = happenings.find(
      ({ urlString }) => urlString === happeningName,
    );

    if (happeningItem) {
      return <HappeningPage happening={happeningItem} />;
    } else {
      return <NotFound msg="No session matches that URL." linkText="Back to schedule" linkUrl="/schedule" />;
    }
  }

  return null;
}

export default compose(withApollo, withHappenings, withRouter)(HappeningLoader);
