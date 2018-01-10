// @flow

import React from 'react';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import Link from 'AsyncLink';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import NewsTeaser from 'NewsTeaser';
import withNewsQuery from 'NewsOverview/withNewsQuery';
import Sponsor from 'Sponsor';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import favicon from '!file-loader?name=favicon.ico!favicons/favicon.ico';
import styles from 'Home/styles.css';
import appleTouchIcon from 'favicons/apple-touch-icon.png';
import favicon32x32 from 'favicons/favicon-32x32.png';
import favicon16x16 from 'favicons/favicon-16x16.png';
import safariPinnedTab from 'favicons/safari-pinned-tab.svg';

const Home = ({ loading, newsList, sponsors }): React.Element<any> | null =>
  !loading &&
  <div className={styles.wrapper}>
    <Helmet>
      <title>Texas Camp 2018</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ef5a47" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#ef5a47" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Menu />
    <div className={styles.contentWrapper}>
      <Header />
      <div className={styles.content}>
        <div className={styles.detail}>
          <div className={styles.tickets}>
            <h5>- Early Nerd -</h5>
            <h4>Tickets</h4>
            <p>$25</p>
            <Link to="tickets" className={styles.button}>
              Register
            </Link>
            <p>
              <small>Regularly $50</small>
            </p>
          </div>
          <div className={styles.latestNews}>
            {newsList
              .slice(0, 1)
              .map(newsTeaser =>
                <NewsTeaser key={newsTeaser.id} newsTeaser={newsTeaser} />,
              )}
          </div>
          <div className={styles.sponsors}>
            <h5>- Platinum -</h5>
            <h4>Sponsors</h4>
            {sponsors
              .filter(sponsor => sponsor.sponsorLevel === 'Platinum')
              .map(sponsor => <Sponsor key={sponsor.id} sponsor={sponsor} />)}
            <Link to="/sponsor" className={styles.button}>
              Sponsor
            </Link>
          </div>
          <div className={styles.speak}>
            <h4>Speak</h4>
            <p>Gain experience and open source your expertise.</p>
            <Link to="/sessions/submit" className={styles.button}>
              Submit
            </Link>
          </div>
          <div className={styles.training}>
            <h4>Training / $50</h4>
            <p>Learn from the best Drupalers this side of the Pecos.</p>
            <Link to="/sessions/training" className={styles.button}>
              Sign Up
            </Link>
          </div>
          {newsList
            .slice(1)
            .map(newsTeaser =>
              <NewsTeaser key={newsTeaser.id} newsTeaser={newsTeaser} />,
            )}
        </div>
        <Footer />
      </div>
    </div>
  </div>;

export default compose(withNewsQuery, withSponsorsQuery)(Home);
