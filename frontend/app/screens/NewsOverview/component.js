// @flow

import React from 'react';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { filter } from 'graphql-anywhere';
import NewsTeaser from 'NewsTeaser';
import type { NewsTeaserProps } from 'NewsTeaser';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import styles from './styles.css';

type NewsOverviewItem = NewsTeaserProps & {
  id: number,
};

type NewsOverviewProps = {
  loading: boolean,
  newsList: Array<NewsOverviewItem>,
};

const NewsOverview = ({
  loading,
  newsList,
}: NewsOverviewProps): React.Element<any> | null =>
  (!loading &&
    <div>
      <Menu />
      <Helmet title="News" />
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.detail}>
            <h1>News</h1>
            <ul>
              {newsList.map(newsItem =>
                (<NewsTeaser
                  key={newsItem.id}
                  {...filter(NewsTeaser.fragments.NewsTeaserFragment, newsItem)}
                />),
              )}
            </ul>
          </div>
        </div>
        <Footer />
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
  props: ({ data: { nodeQuery: { entities } = {}, loading } }) => ({
    loading,
    newsList: entities,
  }),
});

export default compose(withQuery)(NewsOverview);
