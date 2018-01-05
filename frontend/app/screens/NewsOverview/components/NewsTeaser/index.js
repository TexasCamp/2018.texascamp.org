// @flow

import React from 'react';
import Link from 'AsyncLink';
import gql from 'graphql-tag';
import Html from 'Html';

/* eslint-disable react/no-unused-prop-types */
export type NewsTeaserProps = {
  title: string,
  url: {
    alias: string,
  },
  fieldNewsDate: Date,
  body: string,
};
/* eslint-enable react/no-unused-prop-types */

const NewsTeaser = ({
  title,
  url,
  body,
  fieldNewsDate,
}: NewsTeaserProps): React.Element<any> => {
  // Format body to:
  // - Update inline image src to include full url
  // - Remove all links
  let formattedBody = body;
  formattedBody = formattedBody
    ? formattedBody
        .replace(
          'src="/sites/default/files/inline-images/',
          'src="http://2018.texascamp.org.docker.amazee.io/sites/default/files/inline-images/',
        )
        .replace(/<img[^>]*>/g, '')
    : '';

  const formattedDate = fieldNewsDate
    ? new Date(fieldNewsDate).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div>
      <h2>
        <Link to={url && url.alias}>
          {title}
        </Link>
      </h2>
      <h4>
        {formattedDate}
      </h4>
      <Html>
        {formattedBody.length > 600
          ? `${formattedBody.substr(0, 600)}...`
          : formattedBody}
      </Html>
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
      body
      fieldNewsDate
    }
  `,
};

export default NewsTeaser;
