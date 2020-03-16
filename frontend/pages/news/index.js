import React from 'react';
import compose from 'recompose/compose';
import { withApollo } from '../../shared/lib/withApollo';
import HeadTitle from '../../components/HeadTitle';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import NewsTeaser from '../../components/NewsTeaser';
import withNews from '../../shared/query/withNews';
import styles from './styles.css';

const NewsOverview = ({
  loading,
  newsList,
}) =>
  (!loading &&
    <div>
      <Menu />
      <HeadTitle title="News" />
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

export default compose(withApollo(), withNews)(NewsOverview);
