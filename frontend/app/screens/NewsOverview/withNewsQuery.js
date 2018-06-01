// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { NewsT } from 'types';
import moment from 'moment';
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
    fieldNewsDate {
      value
    }
  }
`;

export const newsListMapper = (entities: Array<Object>): Array<NewsT> =>
  entities.map(entity => ({
    title: entity.title,
    body: entity.body.value,
    summary: entity.body.summary,
    publishedDate:
      entity.fieldNewsDate && moment.utc(entity.fieldNewsDate.value),
    urlString: titleToLink(entity.title),
    id: entity.entityId,
  }));

const withNewsQuery = graphql(NEWS_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ newsList: loading ? [] : newsListMapper(entities) }),
});

export default withNewsQuery;
