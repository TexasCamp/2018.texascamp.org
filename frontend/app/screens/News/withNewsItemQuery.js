// @flow

import { graphql } from 'react-apollo';
import { NEWS_QUERY, newsListMapper } from 'NewsOverview/withNewsQuery';

const withNewsItemQuery = graphql(NEWS_QUERY, {
  props: props => {
    const {
      data: { nodeQuery: { entities = [] } = {}, loading },
      ownProps: { match: { params: { newsTitle } } },
    } = props;

    const newsItem = loading
      ? []
      : newsListMapper(entities).find(
          ({ urlString }) => urlString === newsTitle,
        );
    return {
      newsItem,
    };
  },
});

export default withNewsItemQuery;
