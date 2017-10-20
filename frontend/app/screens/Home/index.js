// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Logo from 'Logo';
import NewsletterForm from 'NewsletterForm';
import BackgroundImage from 'BackgroundImage';
// eslint-disable-next-line import/no-webpack-loader-syntax
import prospectus from '!file-loader?name=TexasCamp_2018_Sponsor_Prospectus_[hash].[ext]!documents/prospectus.pdf';
import download from '../../shared/images/download.png';
import styles from './styles.css';

const Home = (): React.Element<any> => (
  <div className={styles.wrapper}>
    <Helmet>
      <title>Texas Camp 2018</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <BackgroundImage />
    <Header />
    <Logo />
    <NewsletterForm />
    <div className={styles.prospectus}>
      <a href={prospectus}>
        <img src={download} alt="Download the Sponsor Prospectus" />
        Sponsor Prospectus
        <div className={styles.border} />
      </a>
    </div>
  </div>
);

export default Home;
