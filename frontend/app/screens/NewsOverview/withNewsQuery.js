// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { NewsT } from 'types';
import { titleToLink } from 'utils';

export const NEWS_QUERY = gql`
  query allNews {
    nodeQuery(offset: 0, limit: 999, filter: { type: "news" }) {
      entities {
        id: entityId
        ...NewsTeaserFragment
      }
    }
  }

  fragment NewsTeaserFragment on NodeNews {
    entityId
    title
    body {
      value
      summary
    }
    fieldNewsDate
  }
`;

export const newsListMapper = (entities: Array<Object>): Array<NewsT> =>
  entities.map(entity => ({
    title: entity.title,
    body: entity.body,
    publishedDate: entity.fieldNewsDate && new Date(entity.fieldNewsDate),
    urlString: titleToLink(entity.title),
    id: entity.entityId,
  }));

const withNewsQuery = graphql(NEWS_QUERY, {
  props: ({
    data: { nodeQuery: { entities } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ newsList: loading ? [] : newsListMapper(entities) }),
});

export default withNewsQuery;
