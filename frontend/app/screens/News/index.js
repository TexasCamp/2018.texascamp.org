// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import type { NewsT } from 'types';
import withNewsItemQuery from './withNewsItemQuery';
import styles from './styles.css';

type NewsProps = {
  newsTeaser: NewsT,
};

const News = ({ newsTeaser }: NewsProps) => {
  // Format body to:
  // - Update inline image src to include full url
  // - Remove all links
  let formattedBody = newsTeaser.body.value;
  formattedBody = formattedBody
    ? formattedBody.replace(
        'src="/sites/default/files/inline-images/',
        'src="https://backend2018.texascamp.org/sites/default/files/inline-images/',
      )
    : '';

  const formattedDate = newsTeaser.publishedDate
    ? newsTeaser.publishedDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div>
      <Helmet title={newsTeaser.title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {newsTeaser.title}
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

export default withNewsItemQuery(News);
