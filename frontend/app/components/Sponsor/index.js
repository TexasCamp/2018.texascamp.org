// @flow

import React from 'react';
import type { SponsorT } from 'types/SponsorT';
import styles from './styles.css';

type SponsorProps = {
  sponsor: SponsorT,
};

const Sponsor = ({ sponsor }: SponsorProps) => {
  return (
    <div className={styles.sponsorWrapper}>
      {sponsor.sponsorUrl
        ? <a href={sponsor.sponsorUrl}>
          {sponsor.sponsorLevel !== 'Individual' && sponsor.image.url
              ? <img src={sponsor.image.url} alt={sponsor.image.alt} />
              : <p>
                {sponsor.title}
              </p>}
        </a>
        : <div>
          {sponsor.sponsorLevel !== 'Individual'
              ? <img src={sponsor.image.url} alt={sponsor.image.alt} />
              : <p>
                {sponsor.title}
              </p>}
        </div>}
    </div>
  );
};

export default Sponsor;
