import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import NewsTeaser from 'NewsTeaser';

const query = gql`
  query NewsOverviewQuery($offset: Int, $limit: Int) {
    nodeQuery(offset: $offset, limit: $limit, filter: {type: "news" }) {
      count,
      entities {
        id:entityId
        ...NewsTeaserFragment
      }
    }
  }

  ${NewsTeaser.fragments.NewsTeaserFragment}
`;

const withNewsQuery = graphql(query, {
  props: ({ data: { nodeQuery: { entities } = {}, loading } }) => ({
    loading,
    newsList: entities,
  }),
});

export default withNewsQuery;
