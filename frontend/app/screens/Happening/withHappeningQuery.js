// @flow

import { graphql } from 'react-apollo';
import {
  HAPPENINGS_QUERY,
  happeningsListMapper,
} from 'Sessions/withSessionsQuery';

const withHappeningQuery = graphql(HAPPENINGS_QUERY, {
  props: props => {
    const {
      data: { nodeQuery: { entities = [] } = {}, loading },
      ownProps: { match: { params: { happeningName } } },
    } = props;
    const happening = loading
      ? []
      : happeningsListMapper(entities).find(
          ({ urlString }) => urlString === happeningName,
        );
    return {
      happening,
    };
  },
});

export default withHappeningQuery;
