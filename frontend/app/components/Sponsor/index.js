// @flow

import React from 'react';
import Link from 'AsyncLink';
import type { SponsorT } from 'types/SponsorT';
import styles from './styles.css';

type SponsorProps = {
  sponsor: SponsorT,
};

const Sponsor = ({ sponsor }: SponsorProps) => {
  return (
    <div className={styles.sponsorWrapper}>
      {sponsor.sponsorUrl &&
        <Link to={sponsor.sponsorUrl}>
          <img src={sponsor.image.url} alt={sponsor.image.alt} />
        </Link>}
      {!sponsor.sponsorUrl &&
        <img src={sponsor.image.url} alt={sponsor.image.alt} />}
    </div>
  );
};

export default Sponsor;
