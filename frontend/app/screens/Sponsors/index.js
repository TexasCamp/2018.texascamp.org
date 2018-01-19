// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import withSponsorsQuery from './withSponsorsQuery';
import styles from './styles.css';

const Sponsors = () => {
  return (
    <div>
      <Helmet title="Sponsors" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withSponsorsQuery(Sponsors);
