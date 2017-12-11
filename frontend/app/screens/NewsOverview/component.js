// @flow

import React from 'react';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withPropsOnChange from 'recompose/withPropsOnChange';
import gql from 'graphql-tag';
import Link from 'AsyncLink';
import { graphql } from 'react-apollo';
import { filter } from 'graphql-anywhere';
import NewsTeaser from 'NewsTeaser';
import type { NewsTeaserProps } from 'NewsTeaser';
import styles from './styles.css';

type NewsOverviewItem = NewsTeaserProps & {
  id: number,
};

type NewsOverviewProps = {
  loading: boolean,
  page: number,
  count: number,
  newsList: Array<NewsOverviewItem>,
  pageSize: number,
  hasPreviousPage?: boolean,
  hasNextPage?: boolean,
  previousPagePath?: string,
  nextPagePath?: string,
};

const NewsOverview = ({
  loading,
  newsList,
  hasPreviousPage,
  hasNextPage,
  previousPagePath,
  nextPagePath,
}: NewsOverviewProps): React.Element<any> | null =>
  (!loading &&
    <div className={styles.Wrapper}>
      <Helmet title="News" />
      <h1>News</h1>
      <ul>
        {newsList.map(newsItem =>
          (<NewsTeaser
            key={newsItem.id}
            {...filter(NewsTeaser.fragments.NewsTeaserFragment, newsItem)}
          />),
        )}
      </ul>
      <div>
        {hasPreviousPage && <Link to={previousPagePath}>Previous</Link>}
        {hasNextPage && <Link to={nextPagePath}>Next</Link>}
      </div>
    </div>) ||
  null;

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

const withQuery = graphql(query, {
  options: ({ pageSize, match: { params: { page = 0 } } }) => ({
    variables: {
      offset: page * pageSize,
      limit: pageSize,
    },
  }),
  props: ({
    ownProps: { match: { params: { page = 0 } } },
    data: { nodeQuery: { entities, count } = {}, loading },
  }) => ({
    loading,
    page: parseInt(page, 10),
    count,
    newsList: entities,
  }),
});

const withDefaultProps = defaultProps({
  pageSize: 5,
});

const withPagination = withPropsOnChange(
  ['count', 'page'],
  (props: NewsOverviewProps) => ({
    hasPreviousPage: props.page > 0,
    hasNextPage: props.page + 1 < props.count / props.pageSize,
    previousPagePath: props.page - 1 > 0 ? `/news/${props.page - 1}` : '/news',
    nextPagePath: `/news/${props.page + 1}`,
  }),
);

export default compose(withDefaultProps, withQuery, withPagination)(
  NewsOverview,
);
