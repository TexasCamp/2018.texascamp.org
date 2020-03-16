import React from 'react'
import compose from 'recompose/compose';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import { withApollo } from '../../shared/lib/withApollo';
import NotFound from '../../components/NotFound';
import BasicPage from '../../components/BasicPage';

const PageLoader = ({
  loading,
  entity,
}) => {
  if (loading) {
    return null;
  }

  switch (entity && entity.__typename) {
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
        title
        body {
          value
        }
      }
    }
  }
`;

const withQuery = graphql(query, {
  options: (props) => ({
    variables: {
      path: props.router.asPath,
    },
  }),
  props: ({ data: { route, loading } }) => ({
    entity: route && route.entity,
    loading,
  }),
});

export default compose(withRouter, withApollo(), withQuery)(PageLoader);
