// @flow

import React from 'react';
import Helmet from 'react-helmet';
import compose from 'recompose/compose';
import MediaQuery from 'react-responsive';
import Link from 'AsyncLink';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import NewsTeaser from 'NewsTeaser';
import withNewsQuery from 'NewsOverview/withNewsQuery';
import SponsorsSlideshow from 'SponsorsSlideshow';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import styles from 'Home/styles.css';
import price from '../../shared/images/regular-price.png';
import sponsorsHeading from '../../shared/images/sponsors-heading.png';

const Home = ({ loading, newsList, sponsors }): React.Element<any> | null => {
  const latestNews = newsList
    .sort((a, b) => b.publishedDate - a.publishedDate)
    .slice(0, 1)
    .map(newsTeaser =>
      <NewsTeaser hompageNews key={newsTeaser.id} newsTeaser={newsTeaser} />,
    );
  const fullNewsList = newsList
    .sort((a, b) => b.publishedDate - a.publishedDate)
    .slice(1)
    .map(newsTeaser =>
      <NewsTeaser hompageNews key={newsTeaser.id} newsTeaser={newsTeaser} />,
    );
  const oddNewsList = newsList
    .sort((a, b) => b.publishedDate - a.publishedDate)
    .slice(1)
    .filter((newsTeaser, index) => !(index % 2))
    .map(newsTeaser =>
      <NewsTeaser hompageNews key={newsTeaser.id} newsTeaser={newsTeaser} />,
    );
  const evenNewsList = newsList
    .sort((a, b) => b.publishedDate - a.publishedDate)
    .slice(1)
    .filter((newsTeaser, index) => index % 2)
    .map(newsTeaser =>
      (<NewsTeaser
        hompageNewsSecondColumn
        hompageNews
        key={newsTeaser.id}
        newsTeaser={newsTeaser}
      />),
    );

  return (
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
            <div className={styles.column}>
              <div className={`${styles.tickets} ${styles.box}`}>
                <div className={styles.smallest}>- Admission -</div>
                <h3>Tickets</h3>
                <img src={price} alt="$50 USD" />
                <a
                  href="https://www.eventbrite.com/e/texas-camp-2018-tickets-42911508477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Register
                </a>
              </div>
              <MediaQuery query="(max-width: 667px)">
                <div className={styles.latestNews}>
                  {latestNews}
                </div>
              </MediaQuery>
              <div className={`${styles.sponsors} ${styles.box}`}>
                <img
                  src={sponsorsHeading}
                  alt="Platinum Sponsors"
                  className={styles.heading}
                />
                <SponsorsSlideshow sponsors={sponsors} />
                <Link to="/sponsors" className={styles.button}>
                  Sponsor
                </Link>
              </div>
              <MediaQuery query="(min-width: 668px)">
                <div className={styles.newsList}>
                  {oddNewsList}
                </div>
              </MediaQuery>
            </div>
            <div className={styles.column}>
              <MediaQuery query="(min-width: 668px)">
                <div className={styles.latestNews}>
                  {latestNews}
                </div>
              </MediaQuery>
              <div className={`${styles.speak} ${styles.box}`}>
                <h4>Sessions</h4>
                <p>
                  {"Gain experience and learn from our speaker's expertise."}
                </p>
                <Link to="/schedule" className={styles.button}>
                  View Schedule
                </Link>
              </div>
              <div className={`${styles.training} ${styles.box}`}>
                <h4>Training / $25</h4>
                <p>Learn from the best Drupalers this side of the Pecos.</p>
                <a
                  href="https://www.eventbrite.com/e/texas-camp-2018-tickets-42911508477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Sign Up
                </a>
              </div>
              <MediaQuery query="(max-width: 667px)">
                <div>
                  {fullNewsList}
                </div>
              </MediaQuery>
              <MediaQuery query="(min-width: 668px)">
                <div className={styles.newsList}>
                  {evenNewsList}
                </div>
              </MediaQuery>
            </div>
          </div>
          <Footer currentPage="home" />
        </div>
      </div>
    </div>
  );
};

export default compose(withNewsQuery, withSponsorsQuery)(Home);
