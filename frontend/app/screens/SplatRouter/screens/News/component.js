// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import styles from './styles.css';

type NewsProps = {
  title: string,
  body: string,
  fieldNewsDate: string,
};

const News = ({
  title,
  body,
  fieldNewsDate,
}: NewsProps): React.Element<any> => {
  // Format body to:
  // - Update inline image src to include full url
  // - Remove all links
  let formattedBody = body;
  formattedBody = formattedBody
    ? formattedBody.replace(
        'src="/sites/default/files/inline-images/',
        'src="http://2018.texascamp.org.docker.amazee.io/sites/default/files/inline-images/',
      )
    : '';

  const formattedDate = fieldNewsDate
    ? new Date(fieldNewsDate).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div>
      <Helmet title={title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title}
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

export default News;
