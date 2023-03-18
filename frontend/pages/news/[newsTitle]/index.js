import React from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'next/router';
import { withApollo } from '../../../shared/lib/withApollo';
import HeadTitle from '../../../components/HeadTitle';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import NotFound from '../../../components/NotFound';
import withNews from '../../../shared/query/withNews';
import { cleanHtml, formatDate } from '../../../shared/utils';
import styles from './styles.css';
import Link from 'next/link';

const NewsPage = ({ newsItem }) => {
  const formattedDate = newsItem.publishedDate
    ? formatDate(newsItem.publishedDate)
    : '';

  return (
    <div>
      <HeadTitle title={newsItem.title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {newsItem.title}
          </h1>
          <div className={styles.detail}>
            <Link href="/news">News</Link>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Published</div>
                <div>
                  {formattedDate}
                </div>
              </div>
            </div>
            <div className={styles.mainContent}>
              {cleanHtml(newsItem.body)}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const NewsLoader = ({ router, loading, newsList }) => {
  if (!loading) {
    const { query: { newsTitle } } = router;

    const newsItem = newsList.find(
      ({ urlString }) => urlString === newsTitle,
    );

    if (newsItem) {
      return <NewsPage newsItem={newsItem} />;
    } else {
      return <NotFound linkText="Back to more news" linkUrl="/News" />;
    }
  }

  return null;
}

export default compose(withApollo({ ssr: true }), withNews, withRouter)(NewsLoader);
