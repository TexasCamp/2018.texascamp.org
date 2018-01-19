// @flow

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { basicPageFragment } from 'BasicPage/fragments';
import BasicPage from 'BasicPage';
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

    default:
      return <NotFound />;
  }
};

const query = gql`
  query SplatRouterQuery($path: String!) {
    route(path: $path) {
      entity {
        ...BasicPageFragment
      }
    }
  }

  ${basicPageFragment}
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
