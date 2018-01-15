// @flow

import React from 'react';
import Link from 'AsyncLink';
import Html from 'Html';
import type { SessionT } from 'type/SessionT';
import styles from './styles.css';

type SessionTeaserProps = {
  sessionTeaser: SessionT,
};

const SessionTeaser = ({
  sessionTeaser,
}: SessionTeaserProps): React.Element<any> => {
  // Use body summary if available
  // If not trim to 400 characters
  const trimmedBody =
    sessionTeaser.body.length > 400
      ? `${sessionTeaser.body.substr(0, 400)}...`
      : sessionTeaser.body;
  let formattedBody = sessionTeaser.summary
    ? sessionTeaser.summary
    : trimmedBody;
  // Format body to remove all images
  formattedBody = formattedBody ? formattedBody.replace(/<img[^>]*>/g, '') : '';

  return (
    <div>
      <Link to={`/sessions/${sessionTeaser.urlString}`}>
        <h3>
          {sessionTeaser.title}
        </h3>
      </Link>
      <Html className={styles.body}>
        {formattedBody}
      </Html>
      <div className={styles.details}>
        {sessionTeaser.speakers &&
          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              Presenter<span className={styles.lightText}>(s)</span>
            </div>
            <div>
              {sessionTeaser.speakers.map(eachName =>
                (<span key={eachName}>
                  {eachName}
                </span>),
              )}
            </div>
          </div>}
        {sessionTeaser.track &&
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Track</div>
            <div>
              {sessionTeaser.track}
            </div>
          </div>}
        {sessionTeaser.skillLevel &&
          <div className={styles.field}>
            <div className={styles.fieldLabel}>Skill Level</div>
            <div>
              {sessionTeaser.skillLevel}
            </div>
          </div>}
      </div>
    </div>
  );
};

export default SessionTeaser;
