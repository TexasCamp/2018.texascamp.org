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
  const trimmedBody =
    newsTeaser.body.value.length > 400
      ? `${newsTeaser.body.value.substr(0, 400)}...`
      : newsTeaser.body.value;
  let formattedBody = newsTeaser.body.summary
    ? newsTeaser.body.summary
    : trimmedBody;
  // Format body to remove all images
  formattedBody = formattedBody ? formattedBody.replace(/<img[^>]*>/g, '') : '';

  const formattedDate = newsTeaser.publishedDate
    ? new Date(newsTeaser.publishedDate).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div>
      <p className={styles.date}>
        {formattedDate}
      </p>
      <h2>
        <Link to={`/news/${newsTeaser.urlString}`}>
          {newsTeaser.title}
        </Link>
      </h2>
      <Html>
        {formattedBody.length > 400
          ? `${formattedBody.substr(0, 400)}...`
          : formattedBody}
      </Html>
      <Link to={`/news/${newsTeaser.urlString}`} className={styles.moreLink}>
        More
      </Link>
    </div>
  );
};

export default NewsTeaser;
