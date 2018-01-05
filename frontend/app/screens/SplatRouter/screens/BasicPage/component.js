// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import styles from './styles.css';

type BasicPageProps = {
  title: string,
  body: string,
};

const BasicPage = ({ title, body }: BasicPageProps): React.Element<any> => {
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

export default BasicPage;
