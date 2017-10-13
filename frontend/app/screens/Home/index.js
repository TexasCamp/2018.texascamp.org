// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Logo from 'Logo';
import NewsletterForm from 'NewsletterForm';
import backgroundImage from '../../shared/images/texas-camper.png';
import styles from './styles.css';

const Home = (): React.Element<any> =>
  (<div className={styles.wrapper}>
    <Helmet title="Texas Camp 2018" />
    <div className={styles.backgroundWrapper}>
      <img className={styles.backgroundImage} src={backgroundImage} alt="" />
    </div>
    <Header />
    <Logo />
    <NewsletterForm />
    <div className={styles.prospectus}>
      <a href="/">Sponsor Prospectus</a>
    </div>
  </div>);

export default Home;
