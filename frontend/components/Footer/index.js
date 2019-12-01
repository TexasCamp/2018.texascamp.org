import React from 'react';
import Sponsor from '../Sponsor';
import withSponsors from '../../shared/query/withSponsors';
import styles from './styles.css';

const Footer = ({ loading, sponsors }) =>
  !loading &&
  <div className={styles.footer}>
    <div className={styles.footerInner}>
      <img src="/images/texas-camp-logo-blue.png" alt="Texas Camp" className={styles.logo} />
      <div className={styles.info}>
        <div>
          May 31-June 2, 2018<span className={styles.separator}>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          </span>Austin, TX
        </div>
        <div className={styles.venue}>Norris Conference Center</div>
        <div className={styles.socialWrapper}>
          <span className={styles.social}>
            <Twitter />
          </span>
          <span className={styles.separator}>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          </span>
          <span className={styles.social}>
            <Facebook />
          </span>
        </div>
      </div>
      <div className={styles.sponsors}>
        <img
          src="/images/sponsors-heading-grey.png"
          alt="Platinum Sponsors"
          className={styles.heading}
        />
        <div className={styles.sponsorsContainer}>
          {sponsors
            .filter(sponsor => sponsor.sponsorLevel === 'Platinum')
            .map(sponsor => <Sponsor key={sponsor.id} sponsor={sponsor} />)}
        </div>
      </div>
    </div>
    <div className={styles.credits}>
      Built by{' '}
      <a
        href="https://www.amazeelabs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Amazee Labs
      </a>{' '}
      with Drupal+React<br />and hosted on{' '}
      <a href="https://www.amazee.io" target="_blank" rel="noopener noreferrer">
        amazee.io
      </a>
    </div>
  </div>;

function Twitter() {
  return (
    <a
      className={styles.social_icon}
      href="https://twitter.com/drupaltexascamp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/twitter-grey.png" alt="twitter" />
    </a>
  );
}

function Facebook() {
  return (
    <a
      className={styles.social_icon}
      href="https://www.facebook.com/DrupalCampTexas/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/facebook-grey.png" alt="facebook" />
    </a>
  );
}

export default withSponsors(Footer);
