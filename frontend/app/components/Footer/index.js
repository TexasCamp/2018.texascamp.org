// @flow

import React from 'react';
import Sponsor from 'Sponsor';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import styles from './styles.css';

const Footer = ({ loading, sponsors }): React.Element<any> | null =>
  !loading &&
  <div className={styles.footer}>
    <div className={styles.sponsorsWrapper}>
      <div className={styles.sponsors}>
        <p>Platinum Sponsors</p>
        <div className={styles.sponsorsContainer}>
          {sponsors
            .filter(sponsor => sponsor.sponsorLevel === 'Platinum')
            .map(sponsor => <Sponsor key={sponsor.id} sponsor={sponsor} />)}
        </div>
      </div>
    </div>
    <div className={styles.credits}>
      Built by <a href="https://www.amazeelabs.com" target="_blank" rel="noopener noreferrer">Amazee Labs</a> with Drupal+React and hosted on <a to="https://www.amazee.io" target="_blank" rel="noopener noreferrer">amazee.io</a>
    </div>
  </div>;

export default withSponsorsQuery(Footer);
