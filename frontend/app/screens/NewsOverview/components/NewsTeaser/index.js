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
}: NewsTeaserProps): React.Element<any> => (
  <div>
    <h2>
      <Link to={url && url.alias}>
        {title}
      </Link>
    </h2>
    <h4>
      {fieldNewsDate}
    </h4>
    <Html>
      {body.length > 600 ? `${body.substr(0, 600)}...` : body}
    </Html>
  </div>
  );

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
