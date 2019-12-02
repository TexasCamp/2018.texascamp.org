import React from 'react';
import Link from 'next/link';
import HeadTitle from '../../components/HeadTitle';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styles from './styles.css';

const NotFound = ({
  msg,
  linkText,
  linkUrl,
}) =>
  (<div className={styles.Wrapper}>
    <HeadTitle title="Page not found" />
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
              <Link href={linkUrl}>
                <a>{linkText}</a>
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
