import React from 'react';
import Link from 'next/link';
import compose from 'recompose/compose';
import MediaQuery from 'react-responsive';
import { withApollo } from '../../shared/lib/withApollo';
import withNews from '../../shared/query/withNews';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import NewsTeaser from '../../components/NewsTeaser';
import SponsorsSlideshow from '../../components/SponsorsSlideshow';
import withSponsors from '../../shared/query/withSponsors';
import styles from './styles.css';

const Home = ({ loading, newsList, sponsors }) => {
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
      <Menu />
      <div className={styles.contentWrapper}>
        <Header isHome="isHome" />
        <div className={styles.content}>
          <div className={styles.detail}>
            <div className={styles.column}>
              <div className={`${styles.tickets} ${styles.box}`}>
                <div className={styles.smallest}>- Admission -</div>
                <h3>Tickets</h3>
                <img src="/images/regular-price.png" alt="$50 USD" />
                <a
                  href="https://www.eventbrite.com/e/texas-camp-2018-tickets-42911508477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Register
                </a>
              </div>
              <div className={styles.latestNews}>
                <MediaQuery query="(max-width: 667px)">
                  {latestNews}
                </MediaQuery>
              </div>
              <div className={`${styles.sponsors} ${styles.box}`}>
                <img
                  src="images/sponsors-heading.png"
                  alt="Platinum Sponsors"
                  className={styles.heading}
                />
                <SponsorsSlideshow sponsors={sponsors} />
                <Link href="/sponsors">
                  <a className={styles.button}>Sponsor</a>
                </Link>
              </div>
              <div className={styles.newsList}>
                <MediaQuery query="(min-width: 668px)">
                  {oddNewsList}
                </MediaQuery>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.latestNews}>
                <MediaQuery query="(min-width: 668px)">
                  {latestNews}
                </MediaQuery>
              </div>
              <div className={`${styles.speak} ${styles.box}`}>
                <h4>Sessions</h4>
                <p>
                  {"Gain experience and learn from our speaker's expertise."}
                </p>
                <Link href="/schedule">
                  <a className={styles.button}>Schedule</a>
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
              <div>
                <MediaQuery query="(max-width: 667px)">
                  {fullNewsList}
                </MediaQuery>
              </div>
              <div className={styles.newsList}>
                <MediaQuery query="(min-width: 668px)">
                  {evenNewsList}
                </MediaQuery>
              </div>
            </div>
          </div>
          <Footer currentPage="home" />
        </div>
      </div>
    </div>
  );
};

export default compose(withApollo({ ssr: true }), withNews, withSponsors)(Home);
