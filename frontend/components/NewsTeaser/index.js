import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Html from '../Html';
import { formatDate } from '../../shared/utils';
import styles from './styles.css';

const NewsTeaser = ({
  newsTeaser,
  hompageNews,
  hompageNewsSecondColumn,
}) => {
  // Use body summary if available
  // If not trim to 400 characters
  const strippedBody = newsTeaser.body.replace(/(<([^>]+)>)/gi, '');
  const trimmedBody =
    strippedBody.length > 200
      ? `${strippedBody.substr(0, 200)}...`
      : strippedBody;
  const formattedBody = newsTeaser.summary ? newsTeaser.summary : trimmedBody;

  const formattedDate = newsTeaser.publishedDate
    ? formatDate(moment.utc(newsTeaser.publishedDate))
    : '';
  const newsContext = hompageNews ? styles.hompageNews : styles.newOverview;
  const homepageStyles = hompageNewsSecondColumn ? styles.secondColumn : null;
  return (
    <div className={`${styles.teaserWrapper} ${newsContext} ${homepageStyles}`}>
      <Link href={`/news/${newsTeaser.urlString}`}>
        <a>
        <div className={styles.date}>
          {formattedDate}
        </div>
        <h2>
          {newsTeaser.title}
        </h2>
        <Html>
          {formattedBody}
        </Html>
        <div className={styles.moreLink}>More</div>
        </a>
      </Link>
    </div>
  );
};

export default NewsTeaser;
