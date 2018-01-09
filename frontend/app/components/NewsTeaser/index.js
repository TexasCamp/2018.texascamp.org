// @flow

import React from 'react';
import Link from 'AsyncLink';
import gql from 'graphql-tag';
import Html from 'Html';
import styles from './styles.css';

/* eslint-disable react/no-unused-prop-types */
export type NewsTeaserProps = {
  title: string,
  url: {
    alias: string,
  },
  fieldNewsDate: Date,
  body: {
    value: string,
    summary: string,
  },
};
/* eslint-enable react/no-unused-prop-types */

const NewsTeaser = ({
  title,
  url,
  body,
  fieldNewsDate,
}: NewsTeaserProps): React.Element<any> => {
  // Use body summary if available
  // If not trim to 400 characters
  const trimmedBody =
    body.value.length > 400 ? `${body.value.substr(0, 400)}...` : body.value;
  let formattedBody = body.summary ? body.summary : trimmedBody;
  // Format body to remove all images
  formattedBody = formattedBody ? formattedBody.replace(/<img[^>]*>/g, '') : '';

  const formattedDate = fieldNewsDate
    ? new Date(fieldNewsDate).toLocaleString('en-US', {
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
        <Link to={url && url.alias}>
          {title}
        </Link>
      </h2>
      <Html>
        {formattedBody.length > 400
          ? `${formattedBody.substr(0, 400)}...`
          : formattedBody}
      </Html>
      <Link to={url && url.alias} className={styles.moreLink}>
        More
      </Link>
    </div>
  );
};

NewsTeaser.fragments = {
  NewsTeaserFragment: gql`
    fragment NewsTeaserFragment on NodeNews {
      url: entityUrl {
        alias
      }
      title
      body {
        value
        summary
      }
      fieldNewsDate
    }
  `,
};

export default NewsTeaser;
