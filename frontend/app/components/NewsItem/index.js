// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { cleanHtml, formatDate } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import type { NewsT } from 'types';
import styles from './styles.css';

const NewsItem = ({ newsItem }: { newsItem: NewsT }) => {
  // Format body to:
  // - Update inline image src to include full url
  let formattedBody = newsItem.body;
  formattedBody = formattedBody
    ? formattedBody.replace(
        'src="/sites/default/files/inline-images/',
        'src="https://backend2018.texascamp.org/sites/default/files/inline-images/',
      )
    : '';

  const formattedDate = newsItem.publishedDate
    ? formatDate(newsItem.publishedDate)
    : '';

  return (
    <div>
      <Helmet title={newsItem.title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {newsItem.title}
          </h1>
          <div className={styles.detail}>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Published</div>
                <div>
                  {formattedDate}
                </div>
              </div>
            </div>
            <div className={styles.mainContent}>
              {cleanHtml(formattedBody)}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
