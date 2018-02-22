// @flow

import React from 'react';
import Sponsor from 'Sponsor';
import Link from 'Link';
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
      Built by <Link to="https://www.amazeelabs.com">Amazee Labs</Link> with Drupal+React and hosted on <Link to="https://www.amazee.io">amazee.io</Link>
    </div>
  </div>;

export default withSponsorsQuery(Footer);
