// @flow

import React from 'react';
import Sponsor from 'Sponsor';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import styles from './styles.css';
import logo from '../../shared/images/texas-camp-logo-blue.png';
import twitter from '../../shared/images/twitter-grey.png';
import facebook from '../../shared/images/facebook-grey.png';
import sponsorsHeading from '../../shared/images/sponsors-heading-grey.png';

const Footer = ({ loading, sponsors }): React.Element<any> | null =>
  !loading &&
  <div className={styles.footer}>
    <div className={styles.footerInner}>
      <img src={logo} alt="Texas Camp" className={styles.logo} />
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
          src={sponsorsHeading}
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
      <img src={twitter} alt="twitter" />
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
      <img src={facebook} alt="facebook" />
    </a>
  );
}

export default withSponsorsQuery(Footer);
