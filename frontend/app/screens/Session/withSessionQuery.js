// @flow

import { graphql } from 'react-apollo';
import { SESSION_QUERY, sessionsListMapper } from 'Sessions/withSessionsQuery';

const withSessionsQuery = graphql(SESSION_QUERY, {
  props: props => {
    const {
      data: { nodeQuery: { entities } = {}, loading },
      ownProps: { match: { params: { sessionName } } },
    } = props;

    const session = loading
      ? []
      : sessionsListMapper(entities).find(
          ({ urlString }) => urlString === sessionName,
        );
    return {
      session,
    };
  },
});

export default withSessionsQuery;