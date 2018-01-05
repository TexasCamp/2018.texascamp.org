// @flow

import gql from 'graphql-tag';

export const newsFragment = gql`
  fragment NewsFragment on NodeNews {
    title
    body
    fieldNewsDate
  }
`;
