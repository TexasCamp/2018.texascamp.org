// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import NewsTeaser from 'NewsTeaser';
import withNewsQuery from 'NewsOverview/withNewsQuery';
import styles from 'NewsOverview/styles.css';

const NewsOverview = ({
  loading,
  newsList,
}: NewsOverviewProps): React.Element<any> | null =>
  (!loading &&
    <div>
      <Menu />
      <Helmet title="News" />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>News</h1>
          <div className={styles.detail}>
            <ul>
              {newsList
                .sort(
                  (a, b) =>
                    b.publishedDate.format('X') - a.publishedDate.format('X'),
                )
                .map(newsTeaser =>
                  <NewsTeaser key={newsTeaser.id} newsTeaser={newsTeaser} />,
                )}
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </div>) ||
  null;

export default withNewsQuery(NewsOverview);
