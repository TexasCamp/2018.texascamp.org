// @flow

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { basicPageFragment } from 'BasicPage/fragments';
import { newsFragment } from 'News/fragments';
import BasicPage from 'BasicPage';
import News from 'News';
import NotFound from 'NotFound';

type SplatRouterProps = {
  entity: any,
  loading: boolean,
};

const SplatRouter = ({
  entity,
  loading,
}: SplatRouterProps): React.Element<any> | null => {
  if (loading) {
    return null;
  }

  switch (entity && entity.__typename) { // eslint-disable-line no-underscore-dangle
    case 'NodePage':
      return <BasicPage {...entity} />;

    case 'NodeNews':
      return <News {...entity} />;

    default:
      return <NotFound />;
  }
};

const query = gql`
  query SplatRouterQuery($path: String!) {
    route(path: $path) {
      entity {
        ...BasicPageFragment
        ...NewsFragment
      }
    }
  }

  ${basicPageFragment}
  ${newsFragment}
`;

const withQuery = graphql(query, {
  options: (props: any) => ({
    variables: {
      // Default to the front page when no path suffix was given.
      path: props.match.url,
    },
  }),
  props: ({ data: { route, loading } }: any): SplatRouterProps => ({
    entity: route && route.entity,
    loading,
  }),
});

export default withQuery(SplatRouter);
