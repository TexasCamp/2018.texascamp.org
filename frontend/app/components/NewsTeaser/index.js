// @flow

import React from 'react';
import Link from 'AsyncLink';
import Html from 'Html';
import { formatDate } from 'utils';
import moment from 'moment';
import type { NewsT } from 'type/NewsT';
import styles from './styles.css';

type NewsTeaserProps = {
  newsTeaser: NewsT,
  hompageNews: boolean,
  hompageNewsSecondColumn: boolean,
};

const NewsTeaser = ({
  newsTeaser,
  hompageNews,
  hompageNewsSecondColumn,
}: NewsTeaserProps): React.Element<any> => {
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
      <Link to={`/news/${newsTeaser.urlString}`}>
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
      </Link>
    </div>
  );
};

export default NewsTeaser;
