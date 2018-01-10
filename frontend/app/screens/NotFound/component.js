// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'AsyncLink';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import styles from './styles.css';

type NotFoundProps = {
  msg: string,
  linkText: string,
  linkUrl: string,
};
const NotFound = ({
  msg,
  linkText,
  linkUrl,
}: NotFoundProps): React.Element<any> =>
  (<div className={styles.Wrapper}>
    <Helmet title="Page not found" />
    <Menu />
    <div className={styles.contentWrapper}>
      <Header />
      <div className={styles.content}>
        <div className={styles.detail}>
          <div>
            <h1>Page not found</h1>
            <p>
              {msg}
            </p>
            <p>
              <Link to={linkUrl}>
                {linkText}
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>);
NotFound.defaultProps = {
  msg: "These aren't the droids you're looking for.",
  linkUrl: '/',
  linkText: 'Back to the front page',
};

export default NotFound;
