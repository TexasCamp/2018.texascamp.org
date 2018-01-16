// @flow

import React from 'react';
import Link from 'AsyncLink';
import Html from 'Html';
import type { NewsT } from 'type/NewsT';
import styles from './styles.css';

type NewsTeaserProps = {
  newsTeaser: NewsT,
};

const NewsTeaser = ({ newsTeaser }: NewsTeaserProps): React.Element<any> => {
  // Use body summary if available
  // If not trim to 400 characters
  const strippedBody = newsTeaser.body.replace(/(<([^>]+)>)/gi, '');
  const trimmedBody =
    strippedBody.length > 400
      ? `${strippedBody.substr(0, 400)}...`
      : strippedBody;
  const formattedBody = newsTeaser.summary ? newsTeaser.summary : trimmedBody;

  const formattedDate = newsTeaser.publishedDate
    ? new Date(newsTeaser.publishedDate).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div className={styles.teaserWrapper}>
      <Link to={`/news/${newsTeaser.urlString}`}>
        <div className={styles.date}>
          {formattedDate}
        </div>
        <h3>
          {newsTeaser.title}
        </h3>
        <Html>
          {formattedBody}
        </Html>
        <div className={styles.moreLink}>More</div>
      </Link>
    </div>
  );
};

export default NewsTeaser;
