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
import styles from 'Home/styles.css';

const Home = ({ loading, newsList, sponsors }): React.Element<any> | null =>
  !loading &&
  <div className={styles.wrapper}>
    <Helmet>
      <title>Texas Camp 2018</title>
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
              .sort(() => Math.random() - 0.5)
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
